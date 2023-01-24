import { Button, Steps } from 'Ocean';
import React, { useState } from 'react';

const Basic = () => {
  const [cur, setCur] = useState(1);

  const change = (index: number) => {
    setCur(index);
  };

  return (
    <>
      <Steps
        onChange={change}
        current={cur}
        data={[
          {
            title: 'Finished',
            description: 'description',
          },
          {
            title: 'In Progress',
            description: 'description',
          },
          {
            title: 'Waiting',
            description: 'description',
          },
        ]}
      ></Steps>

      <Button
        type="primary"
        onClick={() => setCur((pre) => pre + 1)}
        width={120}
        height={40}
        style={{ marginTop: '30px' }}
      >
        next step
      </Button>
    </>
  );
};

export default Basic;
