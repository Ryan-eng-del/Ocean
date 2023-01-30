import { LinkOutlined } from '@ant-design/icons';
import { Link } from 'Ocean';
import React from 'react';

const Basic = () => {
  return (
    <p>
      <Link href="#" color="#319795" rightIcon={<LinkOutlined />}>
        Ocean
      </Link>
      <span>is a library of React UI components!</span>
    </p>
  );
};

export default Basic;
