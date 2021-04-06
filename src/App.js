import React from 'react';
import './App.css';

const App = () => {
  const name = undefined;
  const style = {
    background: 'black',
    color: 'aqua',
  };
  return <div style={style}>{name || '리액트'}</div>;
};
export default App;
