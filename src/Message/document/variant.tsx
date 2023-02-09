import { Button, GlobalThemeProvider, ocean, useMessage } from 'Ocean';
import React from 'react';
import { AlertVariant } from '../../Alert/index';

const Basic = () => {
  const { message } = useMessage();
  const types: Array<AlertVariant> = [
    'bottom-line',
    'left-line',
    'solid',
    'top-line',
    'normal',
  ];

  return (
    <GlobalThemeProvider>
      <ocean.div display={'flex'}>
        {types.map((type) => {
          return (
            <Button
              key={type}
              onClick={() => {
                message({ content: 'This a message!', variant: type });
              }}
            >
              {type}
            </Button>
          );
        })}
      </ocean.div>
    </GlobalThemeProvider>
  );
};

export default Basic;
