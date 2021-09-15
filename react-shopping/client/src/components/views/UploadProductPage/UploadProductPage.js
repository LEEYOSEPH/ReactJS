import React, { useState } from 'react';
import { Typography, Button, Form, Input } from 'antd';
import FileUpload from '../../utils/FileUpload';
import axios from 'axios';

const { Title } = Typography;
const { TextArea } = Input;
const continents = [
  { key: 1, value: 'Afica' },
  { key: 2, value: 'Europe' },
  { key: 3, value: 'Asia' },
  { key: 4, value: 'North America' },
  { key: 5, value: 'South America' },
  { key: 6, value: 'Australia' },
  { key: 7, value: 'Antarctica' },
];

const UploadProductPage = (props) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [continent, setContinent] = useState(1);
  const [images, setImages] = useState([]);

  const titleChangeHandler = (e) => {
    setTitle(e.currentTarget.value);
  };
  const descriptonChangeHandler = (e) => {
    setDescription(e.currentTarget.value);
  };
  const priceChangeHandler = (e) => {
    setPrice(e.currentTarget.value);
  };
  const continentChangeHandler = (e) => {
    setContinent(e.currentTarget.value);
  };
  const updateImages = (newImages) => {
    setImages(newImages);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('클릭 확인');
    if (!title || !description || !price || !continent || !images) {
      return alert('빈칸 확인');
    }

    // 서버에 채운 값들을 request로 보낸다.

    const body = {
      //로그인된 사람의 ID
      writer: props.user.userData._id,
      title: title,
      description: description,
      price: price,
      images: images,
      continents: continent,
    };

    axios.post('/api/product', body).then((response) => {
      if (response.data.success) {
        alert('성공');
        props.history.push('/');
      } else {
        alert('실패');
      }
    });
  };
  return (
    <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <Title level={2}>여행 상품 업로드</Title>
      </div>
      <Form onSubmit={submitHandler}>
        {/* dropzone */}
        <FileUpload refreshFunction={updateImages} />
        <br />
        <br />
        <label>이름</label>
        <Input value={title} onChange={titleChangeHandler} />
        <br />
        <br />
        <label>설명</label>
        <TextArea onChange={descriptonChangeHandler} value={description} />
        <br />
        <br />
        <label>가격</label>
        <Input type="number" onChange={priceChangeHandler} value={price} />
        <br />
        <br />
        <select onChange={continentChangeHandler} value={continent}>
          {continents.map((item) => (
            <option key={item.key} value={item.key}>
              {item.value}
            </option>
          ))}
        </select>
        <br />
        <br />
        <Button htmlType="submit">확인</Button>
      </Form>
    </div>
  );
};

export default UploadProductPage;
