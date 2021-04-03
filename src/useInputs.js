import { useReducer } from 'react';

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

export default function useInputs(initialForm) {
  const [state, deispatch] = useReducer(reducer, initialForm);
  const onChange = (e) => {
    deispatch(e.target);
  };
  return [state, onChange];
}
