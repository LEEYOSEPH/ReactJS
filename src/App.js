import React, { Component } from 'react';
import MyComponent from './MyComponent';

class App extends Component {
  render() {
    return (
      <MyComponent name="React" favNumber={1}>
        React
      </MyComponent>
    );
  }
}
export default App;
