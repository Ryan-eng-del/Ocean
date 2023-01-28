import { PhoneOutlined } from '@ant-design/icons';
import { Input } from 'Ocean';
import React from 'react';

const Basic = () => {
  return (
    <>
      <Input leftIcon={<PhoneOutlined />} style={{ marginBottom: '20px' }} />
      <Input rightIcon={<PhoneOutlined />} />
    </>
  );
};

export default Basic;
