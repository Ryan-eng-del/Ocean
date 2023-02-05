import { Button, GlobalThemeProvider } from 'Ocean';
import React from 'react';

const BasicButton = () => {
  const buttonStyle = { marginRight: '25px', marginBottom: '20px' };

  return (
    <GlobalThemeProvider>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <Button type="text" style={buttonStyle}>
          文本按钮
        </Button>
        <Button type="outline" style={buttonStyle}>
          轮廓按钮
        </Button>
        <Button type="primary" style={buttonStyle}>
          主要按钮
        </Button>
        <Button type="gradual" style={buttonStyle}>
          渐变按钮
        </Button>
        <Button type="danger" style={buttonStyle}>
          危险按钮
        </Button>
      </div>
    </GlobalThemeProvider>
  );
};

export default BasicButton;
