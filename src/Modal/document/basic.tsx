import {
  Button,
  GlobalThemeProvider,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  ModalHead,
  ModalHeadTitle,
} from '@cyan-ocean/ui';
import React, { useState } from 'react';

const Basic = () => {
  const [visible, setVisible] = useState(false);

  const onCancel = () => {
    setVisible(false);
  };
  const onOk = () => {
    setVisible(false);
  };

  return (
    <GlobalThemeProvider>
      <Modal visible={visible} onCancel={() => setVisible(false)}>
        <ModalHead>
          <ModalHeadTitle>Create a Modal</ModalHeadTitle>
          <ModalCloseButton />
        </ModalHead>
        <ModalBody>
          Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco
          deserunt aute id consequat veniam incididunt duis in sint irure nisi.
          Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor
          esse quis. Sunt ad dolore quis aute consequat. Magna exercitation
          reprehenderit magna aute tempor cupidatat consequat elit dolor
          adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis.
          Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor
          eiusmod. Et mollit incididunt nisi consectetur esse laborum eiusmod
          pariatur proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.{' '}
        </ModalBody>
        <ModalFooter>
          <Button type="outline" onClick={onCancel}>
            取消
          </Button>

          <Button type="primary" onClick={onOk} ml={5}>
            确定
          </Button>
        </ModalFooter>
      </Modal>

      <Button onClick={() => setVisible(!visible)} type="primary">
        Open
      </Button>
    </GlobalThemeProvider>
  );
};

export default Basic;
