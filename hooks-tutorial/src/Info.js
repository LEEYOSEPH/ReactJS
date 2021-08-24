import React, { useEffect, useState } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeNickName = (e) => {
    setNickname(e.target.value);
  };
  useEffect(() => {
    console.log(name);
    return () => {
      console.log(name);
    };
  }, [name]);
  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickName} />
      </div>
      <div>
        <div>이름 : {name}</div>
        <div>닉네임 : {nickname}</div>
      </div>
    </div>
  );
};

export default Info;
