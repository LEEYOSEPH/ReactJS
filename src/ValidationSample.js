import React, { Component } from 'react';
import './ValidationSample.css';
class ValidationSample extends Component {
  state = {
    password: '',
    clicked: false,
    validate: false,
  };

  handleChange = (e) => {
    this.setState({
      clicked: true,
      password: e.target.value,
    });
  };
  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validate: this.state.password === '0000',
    });
    this.input.focus();
  };
  render() {
    return (
      <div>
        <input
          ref={(ref) => (this.input = ref)}
          type="password"
          validate={this.state.password}
          onChange={this.handleButtonClick}
          className={
            this.state.clicked ? (this.state.value ? 'success' : 'failure') : ''
          }
        />
        <button onClick={this.handleButtonClick}>check</button>
      </div>
    );
  }
}

export default ValidationSample;
