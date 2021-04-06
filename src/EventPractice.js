import React, { useState } from 'react';

const EventPractice = () => {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const onChangeUsername = (e) => setUsername(e.target.value);
  const onChangeMessage = (e) => setMessage(e.target.value);
  const onClick = () => {
    alert(username + ':' + message);
    setUsername('');
    setMessage('');
  };
  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };

  return (
    <div>
      <h1>Event</h1>
      <input
        text="text"
        name="username"
        placeholder="write"
        value={username}
        onChange={onChangeUsername}
      />
      <input
        text="text"
        name="message"
        placeholder="write"
        value={message}
        onChange={onChangeMessage}
      />
      <button onClick={onClick}>check</button>
    </div>
  );
};

export default EventPractice;
