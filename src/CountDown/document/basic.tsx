import { CountDown } from '@cyan-ocean/ui';
import React from 'react';

const Basic = () => {
  return (
    <>
      {CountDown.setAdd(10, 'minute', {
        onComplete: () => {
          window.alert('倒计时结束！！');
        },
      })}
    </>
  );
};

export default Basic;
