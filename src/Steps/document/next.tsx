import { Button, Steps } from 'Ocean';
import React, { useState } from 'react';

const Basic = () => {
  const [cur, setCur] = useState(1);

  return (
    <>
      <Steps
        current={cur}
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
