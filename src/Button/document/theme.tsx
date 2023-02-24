import { Button, GlobalThemeProvider } from '@cyan-ocean/ui';
import React from 'react';

const BasicButton = () => {
  return (
    <GlobalThemeProvider>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <Button m={3} colorScheme="slate">
          Gray
        </Button>

        <Button m={3} colorScheme="red">
          Red
        </Button>

        <Button m={3} colorScheme="orange">
          Orange
        </Button>

        <Button m={3} colorScheme="yellow">
          Yellow
        </Button>

        <Button m={3} colorScheme="green">
          Green
        </Button>

        <Button m={3} colorScheme="teal">
          Teal
        </Button>

        <Button m={3} colorScheme="blue">
          Blue
        </Button>

        <Button m={3} colorScheme="cyan">
          Cyan
        </Button>

        <Button m={3} colorScheme="purple">
          Purple
        </Button>

        <Button m={3} colorScheme="pink">
          Pink
        </Button>

        <Button m={3} colorScheme="linkedin">
          Linkedin
        </Button>

        <Button m={3} colorScheme="facebook">
          Facebook
        </Button>

        <Button m={3} colorScheme="messenger">
          Messenger
        </Button>

        <Button m={3} colorScheme="whatsapp">
          Whatsapp
        </Button>

        <Button m={3} colorScheme="twitter">
          Twitter
        </Button>

        <Button m={3} colorScheme="telegram">
          Telegram
        </Button>
      </div>
    </GlobalThemeProvider>
  );
};

export default BasicButton;
