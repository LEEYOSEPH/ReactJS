import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductImage from './Sections/ProductImage';
import ProductInfo from './Sections/ProductInfo';
import { Row, Col } from 'antd';

const DetailProductPage = (props) => {
  const productId = props.match.params.productId;
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios
      .get(`/api/product/products_by_id?id=${productId}&type=single`)
      .then((response) => {
        if (response.data.success) {
          console.log(response.data);
          setProduct(response.data.product[0]);
        } else {
          alert('성공');
        }
      });
  }, []);
  return (
    <div style={{ width: '100%', padding: '3rem 4rem' }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <h1>{product.title}</h1>
      </div>
      <br />
      <Row gutter={[16, 16]}>
        <Col lg={12} sm={24}>
          <ProductImage detail={product} />
        </Col>

        <Col lg={12} sm={24}>
          <ProductInfo detail={product} />
        </Col>
      </Row>
    </div>
  );
};

export default DetailProductPage;
