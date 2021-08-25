import React from 'react';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';
import TodoTemplate from './TodoTemplate';

const App = () => {
  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoList />
    </TodoTemplate>
  );
};

export default App;
