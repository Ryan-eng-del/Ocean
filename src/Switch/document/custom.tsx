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
        type="custom"
        checkedIcon={<CheckOutlined />}
        unCheckedIcon={<CloseOutlined />}
      />
    </>
  );
};

export default Basic;
