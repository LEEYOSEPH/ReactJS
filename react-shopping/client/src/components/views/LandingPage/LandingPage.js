import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Icon, Col, Card, Row } from 'antd';
import Meta from 'antd/lib/card/Meta';

function LandingPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.post('/api/product/products').then((response) => {
      if (response.data.success) {
        setProducts(response.data.productInfo);
      } else {
        alert('실패');
      }
    });
  }, []);

  const renderCards = products.map((product, index) => {
    return (
      <Col lg={6} md={8} xs={24} key={index}>
        <Card
          cover={<img src={`http://localhost:5000/${product.images[0]}`} />}
        >
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
        <button>더보기</button>
      </div>
    </div>
  );
}

export default LandingPage;
