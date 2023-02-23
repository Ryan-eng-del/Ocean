import { FacebookFilled, TwitterCircleFilled } from '@ant-design/icons';
import { Button, GlobalThemeProvider, ocean } from '@cyan-ocean/ui';
import React from 'react';

const BasicButton = () => {
  return (
    <GlobalThemeProvider>
      <ocean.div display="flex">
        <Button
          type="primary"
          w={24}
          marginX={5}
          leftIcon={<TwitterCircleFilled />}
        >
          Button
        </Button>
        <Button
          type="primary"
          w={24}
          marginX={5}
          rightIcon={<FacebookFilled />}
        >
          Button
        </Button>
      </ocean.div>
    </GlobalThemeProvider>
  );
};

export default BasicButton;
