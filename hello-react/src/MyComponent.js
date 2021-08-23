import React from "react";
import PropTypes from "prop-types";

const MyComponent = ({ name, children, favoriteNumber }) => {
  return (
    <div>
      나의 새롭고 멋진 {name} <br />
      children = {children} <br />
      내가 좋아하는 숫자는 {favoriteNumber}
    </div>
  );
};

MyComponent.defaultProps = {
  name: "zz",
};
MyComponent.prototypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};
// 다른 파일에서 이 파일을 import할 때, 불러올 수 있다.

export default MyComponent;
