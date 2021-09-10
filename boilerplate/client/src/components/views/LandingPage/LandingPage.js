import axios from 'axios';
import React, { useEffect } from 'react';

const LandingPage = () => {
  useEffect(() => {
    axios.get('/api/hello').then((response) => {
      console.log(response);
    });
  }, []);
  return <div>LandingPage</div>;
};

export default LandingPage;
