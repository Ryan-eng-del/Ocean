import React from 'react';
import { ocean } from '../../Core/System/index';

const Basic = () => {
  return (
    <ocean.div
      bgColor="black"
      min_h="550px"
      justifyContent="center"
      alignItems="center"
      display="flex"
    >
      <ocean.div c="cyan" bg="green" w="130px">
        你好
      </ocean.div>
      <ocean.a c="cyan" bg="red">
        a 标签
      </ocean.a>
      <ocean.div color="blue">a</ocean.div>
    </ocean.div>
  );
};

export default Basic;
