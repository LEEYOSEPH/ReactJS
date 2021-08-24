import React, { useState } from "react";

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: "A" },
    { id: 2, text: "B" },
    { id: 3, text: "C" },
    { id: 4, text: "D" },
  ]);
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5);
  const nameList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));

  const onChange = (e) => setInputText(e.target.value);
  const onClick = () => {
    const nextNames = names.concat({
      id: nextId,
      tet: inputText,
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText("");
  };
  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };
  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{nameList}</ul>;
    </>
  );
};

export default IterationSample;
