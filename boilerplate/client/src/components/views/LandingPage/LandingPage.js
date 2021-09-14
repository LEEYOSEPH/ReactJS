import axios from 'axios';
import React from 'react';
import { withRouter } from 'react-router';

const LandingPage = (props) => {
  const onClickHandler = () => {
    axios.get('/api/users/logout').then((response) => {
      if (response.data.success) {
        props.history.push('/login');
      } else {
        alert('Failed LogOut');
      }
    });
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
      }}
    >
      <h2> Strat page</h2>

      <button onClick={onClickHandler}>LOGOUT</button>
    </div>
  );
};

export default withRouter(LandingPage);
