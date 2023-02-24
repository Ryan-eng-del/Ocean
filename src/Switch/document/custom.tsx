import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { GlobalThemeProvider, Switch } from '@cyan-ocean/ui';
import React from 'react';

const Basic = () => {
  const style = { marginRight: '32px' };
  return (
    <GlobalThemeProvider>
      <Switch
        defaultChecked
        style={style}
        type="custom"
        checkedIcon={<CheckOutlined />}
        unCheckedIcon={<CloseOutlined />}
      />
    </GlobalThemeProvider>
  );
};

export default Basic;
