import React from 'react';
import { ColorConsumer } from '../contexts/color';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const SelectColors = ({ actions }) => {
  return (
    <div>
      <h2>색상 선택</h2>
      <ColorConsumer>
        <div style={{ display: 'flex' }}>
          {colors.map((color) => (
            <div
              key={color}
              style={{
                background: color,
                width: '24px',
                height: '25px',
                cursor: 'pointer',
              }}
              onClick={() => actions.setClolor(color)}
              onContextMenu={(e) => {
                e.preventDefault();
                actions.setSubcolor(color);
              }}
            />
          ))}
        </div>
      </ColorConsumer>

      <hr />
    </div>
  );
};

export default SelectColors;
