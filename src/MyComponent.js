import React from 'react';

const MyComponent = (props) => {
  return (
    <div>
      안녕하세요, 제이름은 {props.name}이에요 children 값은 {props.children}
      이에요
    </div>
  );
};

MyComponent.defaultProps = {
  name: '기본이름',
};

export default MyComponent;
