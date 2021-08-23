import React, { useState } from "react";

const Say = () => {
  const [message, setMessage] = useState("");
  const onClickEnter = () => setMessage("hello");
  const onClickLeave = () => setMessage("buy");
  return (
    <div>
      <button onClick={onClickEnter}>enter</button>
      <button onClick={onClickLeave}>Leave</button>
      <h1>{message}</h1>
    </div>
  );
};

export default Say;
