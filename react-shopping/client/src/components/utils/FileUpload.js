import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import { Icon } from 'antd';
import axios from 'axios';

const FileUpload = (props) => {
  /*  서버로부터 받은 이미지 받기 */
  const [images, setImages] = useState([]);

  /* 서버에 이미지 저장 */
  const dropHandler = (files) => {
    let formData = new FormData();
    const config = {
      header: { 'content-type': 'multipart/form-data' },
    };
    formData.append('file', files[0]);
    axios.post('/api/product/image', formData, config).then((response) => {
      if (response.data.success) {
        setImages([...images, response.data.filePath]);
        props.refreshFunction([...images, response.data.filePath]);
      } else {
        alert('파일저장 실패');
      }
    });
  };

  /* 이미지 삭제 */
  const deleteHandler = (image) => {
    const currentIndex = images.indexOf(image);

    let newImages = [...images];
    newImages.splice(currentIndex, 1);
    setImages(newImages);
    props.refreshFunction(newImages);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Dropzone onDrop={dropHandler}>
        {({ getRootProps, getInputProps }) => (
          <section>
            <div
              style={{
                width: 300,
                height: 240,
                border: '1px solid lightgray',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              {...getRootProps()}
            >
              <input {...getInputProps()} />
              <Icon type="plus" style={{ fontSize: '3rem' }} />
            </div>
          </section>
        )}
      </Dropzone>
      <div
        style={{
          display: 'flex',
          width: '350px',
          height: '240px',
          overflowX: 'scroll',
        }}
      >
        {images.map((image, index) => (
          <div onClick={() => deleteHandler(image)} key={index}>
            <img
              style={{ minWidth: '300px', width: '300px', height: '240px' }}
              src={`http://localhost:5000/${image}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileUpload;
