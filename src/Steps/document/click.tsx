import { Button, GlobalThemeProvider, Steps } from 'Ocean';
import React, { useState } from 'react';

const Basic = () => {
  const [cur, setCur] = useState(1);

  const change = (index: number) => {
    setCur(index);
  };

  return (
    <GlobalThemeProvider>
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

      <Button type="primary" onClick={() => setCur((pre) => pre + 1)} mt={7}>
        next step
      </Button>
    </GlobalThemeProvider>
  );
};

export default Basic;
