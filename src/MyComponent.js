import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({ name, children, favNumber }) => {
  return (
    <div>
      안녕하세요, 제이름은 {name}이에요 children 값은 {children}
      이에요
      <br />I like number is {favNumber}
    </div>
  );
};

MyComponent.defaultProps = {
  name: '기본이름',
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favNumber: PropTypes.number.isRequired,
};

export default MyComponent;
