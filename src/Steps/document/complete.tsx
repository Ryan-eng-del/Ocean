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
          },
          {
            title: 'In Progress',
          },
          {
            title: 'Waiting',
          },
        ]}
        onComplete={complete}
      ></Steps>

      <Button type="primary" onClick={() => setCur((pre) => pre + 1)} mt={7}>
        next step
      </Button>
    </GlobalThemeProvider>
  );
};

export default Basic;
