import { Alert, Button } from 'Ocean';
import React, { useState } from 'react';

const Basic = () => {
  const [visible, setVisible] = useState(true);

  return (
    <>
      <Alert
        content="This is a Alert!!"
        closeElement="知道了"
        showIcon={false}
        visible={visible}
        style={{ marginBottom: '12px' }}
      />

      <Button
        width={120}
        height={40}
        type="primary"
        onClick={() => setVisible(false)}
      >
        关闭
      </Button>
    </>
  );
};

export default Basic;
