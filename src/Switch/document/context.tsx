import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Switch } from 'Ocean';
import React from 'react';

const Basic = () => {
  const style = { marginRight: '32px' };
  return (
    <>
      <Switch
        defaultChecked
        style={style}
        checkedChildren={'打开'}
        unCheckedChildren={'关闭'}
      />
      <Switch
        defaultChecked
        style={style}
        checkedChildren={<CheckOutlined />}
        unCheckedChildren={<CloseOutlined />}
      />
    </>
  );
};

export default Basic;
