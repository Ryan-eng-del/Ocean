import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Button, GlobalThemeProvider, Switch } from 'Ocean';
import React, { useState } from 'react';

const Basic = () => {
  const style = { marginBottom: '32px' };
  const [status, setStatus] = useState(true);

  return (
    <GlobalThemeProvider>
      <Switch
        defaultChecked
        style={style}
        checked={status}
        checkedIcon={<CheckOutlined />}
        unCheckedIcon={<CloseOutlined />}
      />

      <Button type="primary" onClick={() => setStatus(!status)}>
        {status ? '关闭' : '打开'}
      </Button>
    </GlobalThemeProvider>
  );
};

export default Basic;
