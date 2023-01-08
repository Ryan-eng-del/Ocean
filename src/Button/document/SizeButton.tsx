import { Button } from 'Ocean';
import React from 'react';

const BasicButton = () => {
  const buttonStyle = { marginRight: '25px', marginBottom: '20px' };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <Button type="primary" style={buttonStyle} size={'small'}>
        主要按钮
      </Button>
      <Button type="gradual" style={buttonStyle} size={'medium'}>
        渐变按钮
      </Button>
      <Button type="outline" style={buttonStyle} size={'large'}>
        轮廓按钮
      </Button>
    </div>
  );
};

export default BasicButton;
