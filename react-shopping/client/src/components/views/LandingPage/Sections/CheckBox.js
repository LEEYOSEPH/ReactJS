import React, { Fragment, useState } from 'react';
import { Collapse, Checkbox } from 'antd';

const { Panel } = Collapse;

const CheckBox = (props) => {
  const [checked, setChecked] = useState([]);

  const handleToggle = (value) => {
    // 클릭한 index를 구하고
    const currentIndex = checked.indexOf(value);
    console.log(checked.indexOf(value));

    //전체 checked된 state에서 현재 누른 checkbox가 이미 있다면
    const newChecked = [...checked];

    // state에 넣어준다.
    if (currentIndex === -1) {
      newChecked.push(value);
      //빼주고
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
    props.handleFilters(newChecked);
  };

  const renderCheckBoxList = () =>
    props.list &&
    props.list.map((value, index) => (
      <Fragment key={index}>
        <Checkbox
          onChange={() => handleToggle(value._id)}
          checked={checked.indexOf(value._id) === -1 ? false : true}
        />
        <span>{value.name}</span>
      </Fragment>
    ));

  return (
    <div>
      <Collapse defaultActiveKey={['1']}>
        <Panel header="Continents" key="1">
          {renderCheckBoxList()}
        </Panel>
      </Collapse>
    </div>
  );
};

export default CheckBox;
