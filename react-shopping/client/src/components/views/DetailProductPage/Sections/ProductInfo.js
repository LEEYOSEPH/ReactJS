import React from 'react';
import { Descriptions, Button } from 'antd';

const ProductInfo = (props) => {
  const clickHandler = () => {};

  return (
    <div>
      <Descriptions title="Product Info">
        <Descriptions.Item label="Price">
          {props.detail.price}
        </Descriptions.Item>
        <Descriptions.Item label="Sold">{props.detail.sold}</Descriptions.Item>
        <Descriptions.Item label="View">{props.detail.views}</Descriptions.Item>
        <Descriptions.Item label="Descriptions">
          {props.detail.descriptions}
        </Descriptions.Item>
      </Descriptions>

      <br />
      <br />
      <br />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button size="large" shape="round" type="danger" onClick={clickHandler}>
          Add To Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductInfo;
