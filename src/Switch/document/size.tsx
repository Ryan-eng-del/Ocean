import { GlobalThemeProvider, Switch } from '@cyan-ocean/ui';
import React from 'react';

const Basic = () => {
  const style = { marginRight: '32px' };
  return (
    <GlobalThemeProvider>
      <Switch defaultChecked style={style} size="small" />
      <Switch defaultChecked style={style} size="medium" />
      <Switch defaultChecked style={style} size="large" />
    </GlobalThemeProvider>
  );
};

export default Basic;
