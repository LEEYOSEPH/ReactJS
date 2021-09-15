import React, { useEffect } from 'react';
import axios from 'axios';

function LandingPage() {
  useEffect(() => {
    axios.post('/api/product/products').then((response) => {
      if (response.data.success) {
        console.log(response.data);
      } else {
        alert('실패');
      }
    });
  }, []);

  return <div>LandigPage</div>;
}

export default LandingPage;
