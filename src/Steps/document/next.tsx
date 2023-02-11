import { Button, GlobalThemeProvider, Steps } from 'Ocean';
import React, { useState } from 'react';

const Basic = () => {
  const [cur, setCur] = useState(1);

  return (
    <GlobalThemeProvider>
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
        style={{ marginTop: '30px' }}
      >
        <div></div>
        next step
      </Button>
    </GlobalThemeProvider>
  );
};

export default Basic;
