import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import { Input } from 'Ocean';
import React, { useState } from 'react';

const Basic = () => {
  const [type, setType] = useState('password');
  return (
    <Input
      type={type}
      rightIcon={
        type === 'password' ? (
          <EyeOutlined onClick={() => setType('text')} />
        ) : (
          <EyeInvisibleOutlined onClick={() => setType('password')} />
        )
      }
    />
  );
};

export default Basic;
