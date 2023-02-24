import { Button, GlobalThemeProvider } from '@cyan-ocean/ui';
import { useColorMode } from '@cyan-ocean/ui/System/colorMode';
import React from 'react';
const Cpn = () => {
  const value = useColorMode();
  console.log(value, 'value');
  return (
    <Button type="primary" w={24} marginX={5} onClick={value.toggleTheme}>
      Button
    </Button>
  );
};

const BasicButton = () => {
  return (
    <GlobalThemeProvider>
      <Cpn />
      <Button type="primary" w={24} marginX={5}>
        Button
      </Button>
    </GlobalThemeProvider>
  );
};

export default BasicButton;
