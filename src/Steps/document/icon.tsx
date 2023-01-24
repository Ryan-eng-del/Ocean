import {
  LeftCircleFilled,
  LoginOutlined,
  RightCircleFilled,
} from '@ant-design/icons';
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
