import {
  LeftCircleFilled,
  LoginOutlined,
  RightCircleFilled,
} from '@ant-design/icons';
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
            description: 'description',
            icon: <LoginOutlined />,
          },
          {
            title: 'In Progress',
            description: 'description',
            icon: <RightCircleFilled />,
          },
          {
            title: 'Waiting',
            description: 'description',
            icon: <LeftCircleFilled />,
          },
        ]}
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
