import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Icon, Col, Card, Row, Button } from 'antd';
import Meta from 'antd/lib/card/Meta';
import ImagesSlider from '../../utils/ImagesSlider';

function LandingPage() {
  const [products, setProducts] = useState([]);
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(8);

  useEffect(() => {
    let body = {
      skip: skip,
      limit: limit,
    };
    axios.post('/api/product/products', body).then((response) => {
      if (response.data.success) {
        setProducts(response.data.productInfo);
      } else {
        alert('실패');
      }
    });
  }, []);

  const loadMoreHandler = () => {
    alert('zz');
  };

  const renderCards = products.map((product, index) => {
    return (
      <Col lg={6} md={8} xs={24} key={index}>
        <Card cover={<ImagesSlider images={product.images} />}>
          <Meta title={product.title} description={`$${product.price}`} />
        </Card>
      </Col>
    );
  });

  return (
    <div style={{ width: '75%', margin: '3rem auto' }}>
      <div style={{ textAlign: 'center' }}>
        <h2>
          Let's Travel <Icon type="rocket" />
        </h2>
      </div>

      {/* Filter */}

      {/* Search */}

      <Row gutter={(16, 16)}>{renderCards}</Row>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button onClick={loadMoreHandler}>더보기</Button>
      </div>
    </div>
  );
}

export default LandingPage;
