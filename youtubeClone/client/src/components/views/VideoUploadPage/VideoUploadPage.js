import React from 'react';
import { Typography, Button, Form, message, Input, Icon } from 'antd';
import { withRouter } from 'react-router';

const { TextArea } = Input;
const { Tilte } = Typography;
const VideoUploadPage = () => {
  return (
    <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <Tilte level={2}>Upload Video</Tilte>
      </div>
      <Form onSubmit>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* drop zone */}
          {/* Thumbnail */}
          <div>
            <img scr alt />
          </div>
        </div>
        <br />
        <br />
        <label>Title</label>
        <Input onChange value />
        <br />
        <br />
        <label>Description</label>
        <TextArea onChange value />
        <select onChange>
          <option key value></option>
        </select>
        <Button type="primary" size="large" onClick>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default withRouter(VideoUploadPage);
