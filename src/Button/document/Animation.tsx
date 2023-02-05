import { Button, GlobalThemeProvider } from 'Ocean';
import React from 'react';

const BasicButton = () => {
  const buttonStyle = { marginRight: '25px', marginBottom: '20px' };

  return (
    <GlobalThemeProvider>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <Button type="text" style={buttonStyle} animationColor={'#2B3467'}>
          文本按钮
        </Button>

        <Button type="outline" style={buttonStyle} animationColor={'#C0DEFF'}>
          轮廓按钮
        </Button>
        <Button type="primary" style={buttonStyle} animationColor={'#EAFDFC'}>
          主要按钮
        </Button>
      </div>
    </GlobalThemeProvider>
  );
};

export default BasicButton;
