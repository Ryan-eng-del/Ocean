import { Button, GlobalThemeProvider, Steps } from 'Ocean';
import React, { useState } from 'react';

const Basic = () => {
  const [cur, setCur] = useState(1);

  const complete = () => {
    window.alert('全部完成!!');
  };
  return (
    <GlobalThemeProvider>
      <Steps
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
        onComplete={complete}
      ></Steps>

      <Button
        type="primary"
        onClick={() => setCur((pre) => pre + 1)}
        style={{ marginTop: '30px' }}
      >
        next step
      </Button>
    </GlobalThemeProvider>
  );
};

export default Basic;
