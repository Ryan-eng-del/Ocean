import { Button, ButtonGroup, GlobalThemeProvider } from 'Ocean';
import React from 'react';

const BasicButtonGroup = () => {
  const buttonStyle = { marginRight: '25px', marginBottom: '20px' };

  return (
    <GlobalThemeProvider>
      <div style={{ display: 'flex' }}>
        <ButtonGroup type={'primary'}>
          <Button style={buttonStyle}>主要按钮</Button>
          <Button style={buttonStyle}>轮廓按钮</Button>
          <Button style={buttonStyle}>文本按钮</Button>
        </ButtonGroup>
      </div>
    </GlobalThemeProvider>
  );
};

export default BasicButtonGroup;
