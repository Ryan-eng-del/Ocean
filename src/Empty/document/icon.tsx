import { ExclamationCircleFilled } from '@ant-design/icons';
import { Empty, GlobalThemeProvider } from 'Ocean';
import React from 'react';

const Basic = () => {
  return (
    <GlobalThemeProvider>
      <Empty
        icon={
          <ExclamationCircleFilled
            style={{ fontSize: '48px', color: '#2c5282' }}
          />
        }
      >
        <div>Empty</div>
      </Empty>
    </GlobalThemeProvider>
  );
};

export default Basic;
