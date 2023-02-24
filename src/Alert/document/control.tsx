import {
  Alert,
  AlertContent,
  AlertIcon,
  Button,
  GlobalThemeProvider,
} from '@cyan-ocean/ui';
import React, { useState } from 'react';

const Basic = () => {
  const [visible, setVisible] = useState(true);

  return (
    <GlobalThemeProvider>
      <Alert visible={visible}>
        <AlertIcon />
        <AlertContent>This is an Alert!</AlertContent>
      </Alert>

      <div>
        <Button
          width={32}
          height={10}
          type="primary"
          marginY={3}
          marginX="auto"
          onClick={() => setVisible(false)}
        >
          关闭
        </Button>
      </div>
    </GlobalThemeProvider>
  );
};

export default Basic;
