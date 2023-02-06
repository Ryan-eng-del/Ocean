import { GlobalThemeProvider, ocean } from 'Ocean';
import React, { useState } from 'react';

const Base = () => {
  const [show, setShow] = useState(false);

  return (
    <GlobalThemeProvider>
      <ocean.div
        onClick={() => setShow(!show)}
        w={24}
        marginX={5}
        height="24px"
        lineHeight="1.2"
        transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
        border="1px"
        px="8px"
        borderRadius="2px"
        fontSize="14px"
        fontWeight="semibold"
        bg="#f5f6f7"
        borderColor="#ccd0d5"
        c="#4b4f56"
        _hover={{ bg: '#ebedf0' }}
        _active={{
          bg: '#dddfe2',
          borderColor: '#bec3c9',
        }}
        _focus={{
          boxShadow:
            '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
        }}
      >
        NIHAO1
      </ocean.div>
    </GlobalThemeProvider>
  );
};

const Basic = () => {
  return (
    // <GlobalThemeProvider>
    <Base />
    // </GlobalThemeProvider>
  );
};

export default Basic;
