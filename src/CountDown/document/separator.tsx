import { RightOutlined } from '@ant-design/icons';
import { CountDown } from '@cyan-ocean/ui';
import React from 'react';

const Basic = () => {
  return (
    <>
      {CountDown.setAdd(10, 'minute', {
        separator: '-',
        size: 'large',
      })}

      <div style={{ margin: '20px 0' }}>
        {CountDown.setAdd(10, 'minute', {
          separator: '--',
          size: 'large',
        })}
      </div>

      {CountDown.setAdd(10, 'minute', {
        size: 'large',
        separator: <RightOutlined style={{ fontSize: '15px' }} />,
      })}
    </>
  );
};

export default Basic;
