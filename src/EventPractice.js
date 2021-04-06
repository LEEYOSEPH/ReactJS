import React, { Component } from 'react';

class EventPractice extends Component {
  state = {
    message: '',
    username: '',
  };

  handleChage = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleClick = () => {
    alert(this.state.username + ':' + this.state.message);
    this.setState({
      message: '',
      username: '',
    });
  };

  hnadleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleClick();
    }
  };
  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="username"
          placeholder="writeanything"
          value={this.state.username}
          onChange={this.handleChage}
        />
        <input
          type="text"
          name="message"
          placeholder="writeanything"
          value={this.state.message}
          onChange={this.handleChage}
          onKeyPress={this.hnadleKeyPress}
        />
        <button onClick={this.handleClick}>check</button>
      </div>
    );
  }
}

export default EventPractice;
