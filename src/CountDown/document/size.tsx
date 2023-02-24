import { CountDown } from '@cyan-ocean/ui';
import React from 'react';

const Basic = () => {
  return (
    <>
      {CountDown.setAdd(10, 'minute', {
        size: 'small',
      })}

      <div style={{ margin: '20px 0' }}>
        {CountDown.setAdd(10, 'minute', {
          size: 'medium',
        })}
      </div>

      {CountDown.setAdd(10, 'minute', {
        size: 'large',
      })}
    </>
  );
};

export default Basic;
