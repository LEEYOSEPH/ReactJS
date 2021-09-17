import React, { useState } from 'react';
import { Input } from 'antd';

const { Search } = Input;

const SearchFeature = (props) => {
  const [searchTerm, setSearchTerm] = useState('');

  const searchHandler = (e) => {
    setSearchTerm(e.currentTarget.value);
    props.refreshFunction(e.currentTarget.value);
  };
  return (
    <div>
      <Search
        placeholder="input search text"
        onChange={searchHandler}
        value={searchTerm}
        style={{ width: 200 }}
      />
    </div>
  );
};

export default SearchFeature;
