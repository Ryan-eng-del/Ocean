import { GlobalThemeProvider, Switch } from '@cyan-ocean/ui';
import React, { useState } from 'react';

const Basic = () => {
  const style = { marginRight: '32px' };
  const [text, setText] = useState('');
  const [status, setStatus] = useState(true);
  const toggle = (switchStatus: boolean) => {
    if (switchStatus) {
      setText('我打开了');
      setStatus(true);
    } else {
      setText('我关闭了');
      setStatus(false);
    }
  };

  return (
    <GlobalThemeProvider>
      <Switch defaultChecked checked={status} style={style} onToggle={toggle} />

      <span>{text || '默认文本'}</span>
    </GlobalThemeProvider>
  );
};

export default Basic;
