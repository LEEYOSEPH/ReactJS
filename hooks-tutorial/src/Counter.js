import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });
  return (
    <div>
      <p>현재 카운터 값은 {state.value}</p>
      <butt onClick={() => dispatch({ type: "INCREMENT" })}>+1</butt>
      <butt onClick={() => dispatch({ type: "DECREMENT" })}>-1</butt>
    </div>
  );
};

export default Counter;
