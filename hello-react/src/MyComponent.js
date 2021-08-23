import React from "react";

const MyComponent = (props) => {
  const { name, children } = props;
  return (
    <div>
      나의 새롭고 멋진 {name} <br />
      children = {children}
    </div>
  );
};

MyComponent.defaultProps = {
  name: "zz",
};
// 다른 파일에서 이 파일을 import할 때, 불러올 수 있다.

export default MyComponent;
