import { GlobalThemeProvider, Switch } from '@cyan-ocean/ui';
import React from 'react';

const Basic = () => {
  const style = { marginRight: '32px' };
  return (
    <GlobalThemeProvider>
      <Switch defaultChecked style={style} />
      <Switch defaultChecked type="custom" />
    </GlobalThemeProvider>
  );
};

export default Basic;
