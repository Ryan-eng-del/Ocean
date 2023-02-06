import { Alert, Button, GlobalThemeProvider } from 'Ocean';
import React, { useState } from 'react';

const Basic = () => {
  const [visible, setVisible] = useState(true);

  return (
    <GlobalThemeProvider>
      <Alert
        content="This is a Alert!!"
        closeElement="知道了"
        showIcon={false}
        visible={visible}
        style={{ marginBottom: '12px' }}
      />

      <Button
        width={32}
        height={12}
        type="primary"
        onClick={() => setVisible(false)}
      >
        关闭
      </Button>
    </GlobalThemeProvider>
  );
};

export default Basic;
