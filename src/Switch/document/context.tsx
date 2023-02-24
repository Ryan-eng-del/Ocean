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
        checkedChildren={'打开'}
        unCheckedChildren={'关闭'}
      />
      <Switch
        defaultChecked
        style={style}
        checkedChildren={<CheckOutlined />}
        unCheckedChildren={<CloseOutlined />}
      />
    </GlobalThemeProvider>
  );
};

export default Basic;
