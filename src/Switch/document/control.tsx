import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Button, Switch } from 'Ocean';
import React, { useState } from 'react';

const Basic = () => {
  const style = { marginBottom: '32px' };
  const [status, setStatus] = useState(true);

  return (
    <>
      <Switch
        defaultChecked
        style={style}
        checked={status}
        checkedIcon={<CheckOutlined />}
        unCheckedIcon={<CloseOutlined />}
      />

      <Button
        width={100}
        height={40}
        type="primary"
        onClick={() => setStatus(!status)}
      >
        {status ? '关闭' : '打开'}
      </Button>
    </>
  );
};

export default Basic;
