import { Steps } from 'Ocean';
import React from 'react';

const Basic = () => {
  return (
    <Steps
      current={2}
      data={[
        {
          title: 'Finished',
        },
        {
          title: 'In Progress',
        },
        {
          title: 'Waiting',
        },
      ]}
    ></Steps>
  );
};

export default Basic;
