import React, { Fragment } from 'react';
import { Collapse, Checkbox } from 'antd';

const { Panel } = Collapse;

const CheckBox = (props) => {
  const renderCheckBoxList = () =>
    props.list &&
    props.list.map((value, index) => (
      <Fragment key={index}>
        <Checkbox onChange>
          <span>{value.name}</span>
        </Checkbox>
      </Fragment>
    ));

  return (
    <Collapse defaultActiveKey={['1']}>
      <Panel header="Continents" key="1">
        {renderCheckBoxList()}
      </Panel>
    </Collapse>
  );
};

export default CheckBox;
