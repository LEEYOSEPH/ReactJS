import React, { useState } from 'react';
import aioxs from 'axios';
import axios from '../node_modules/axios/index';

const App = () => {
  const [data, setDate] = useState(null);
  const onClick = async () => {
    try {
      const response = await aioxs.get(
        'https://jsonplaceholder.typicode.com/todos/1',
      );
      setDate(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && (
        <textarea
          rows={7}
          value={JSON.stringify(data, null, 2)}
          readOnly={true}
        />
      )}
    </div>
  );
};

export default App;
