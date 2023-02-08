import {
  Button,
  GlobalThemeProvider,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  ModalHead,
  ModalHeadTitle,
  Radio,
  RadioGroup,
} from 'Ocean';
import React, { useState } from 'react';

const Basic = () => {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState<'inside' | 'outside'>('inside');

  const onCancel = () => {
    setVisible(false);
  };
  const onOk = () => {
    setVisible(false);
  };
  const changeSize = (d: 'inside' | 'outside') => {
    setValue(d);
  };
  return (
    <GlobalThemeProvider>
      <RadioGroup
        value={value}
        onChange={(d: any) => changeSize(d)}
        noExam={true}
        type="primary"
        mode="horizontal"
        size="small"
        solid={false}
      >
        <Radio value={'inside'}>inside</Radio>
        <Radio value={'outside'}>outside</Radio>
      </RadioGroup>
      <Modal
        visible={visible}
        onCancel={() => setVisible(false)}
        scrollBehavior={value}
      >
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
          pariatur proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
          Est velit labore esse esse cupidatat. Velit id elit consequat minim.
          Mollit enim excepteur ea laboris adipisicing aliqua proident occaecat
          do do adipisicing adipisicing ut fugiat. Consequat pariatur ullamco
          aute sunt esse. Irure excepteur eu non eiusmod. Commodo commodo et ad
          ipsum elit esse pariatur sit adipisicing sunt excepteur enim.
          Incididunt duis commodo mollit esse veniam non exercitation dolore
          occaecat ea nostrud laboris. Adipisicing occaecat fugiat fugiat irure
          fugiat in magna non consectetur proident fugiat. Commodo magna et
          aliqua elit sint cupidatat. Sint aute ullamco enim cillum anim ex. Est
          eiusmod commodo occaecat consequat laboris est do duis. Enim
          incididunt non culpa velit quis aute in elit magna ullamco in
          consequat ex proident. Dolore incididunt mollit fugiat pariatur
          cupidatat ipsum laborum cillum. Commodo consequat velit cupidatat duis
          ex nisi non aliquip ad ea pariatur do culpa. Eiusmod proident
          adipisicing tempor tempor qui pariatur voluptate dolor do ea commodo.
          Veniam voluptate cupidatat ex nisi do ullamco in quis elit. Cillum
          proident veniam cupidatat pariatur laborum tempor cupidatat anim
          eiusmod id nostrud pariatur tempor reprehenderit. Do esse ullamco
          laboris sunt proident est ea exercitation cupidatat. Do Lorem eiusmod
          aliqua culpa ullamco consectetur veniam voluptate cillum. Dolor
          consequat cillum tempor laboris mollit laborum reprehenderit
          reprehenderit veniam aliqua deserunt cupidatat consequat id. Est id
          tempor excepteur enim labore sint aliquip consequat duis minim tempor
          proident. Dolor incididunt aliquip minim elit ea. Exercitation non
          officia eu id. Ipsum ipsum consequat incididunt do aliquip pariatur
          nostrud. Qui ut sint culpa labore Lorem. Magna deserunt aliquip aute
          duis consectetur magna amet anim. Magna fugiat est nostrud veniam.
          Officia duis ea sunt aliqua. Ipsum minim officia aute anim minim aute
          aliquip aute non in non. Ipsum aliquip proident ut dolore eiusmod ad
          fugiat fugiat ut ex. Ea velit Lorem ut et commodo nulla voluptate
          veniam ea et aliqua esse id. Pariatur dolor et adipisicing ea mollit.
          Ipsum non irure proident ipsum dolore aliquip adipisicing laborum
          irure dolor nostrud occaecat exercitation. Culpa qui reprehenderit
          nostrud aliqua reprehenderit et ullamco proident nisi commodo non ut.
          Ipsum quis irure nisi sint do qui velit nisi. Sunt voluptate eu
          reprehenderit tempor consequat eiusmod Lorem irure velit duis Lorem
          laboris ipsum cupidatat. Pariatur excepteur tempor veniam cillum et
          nulla ipsum veniam ad ipsum ad aute. Est officia duis pariatur ad
          eiusmod id voluptate. Duis est est do dolore magna proident labore do
          irure. Irure aliquip cillum est esse mollit laborum esse anim sint ut
          laboris ut proident culpa. Exercitation duis eu officia commodo.
          Proident commodo esse occaecat velit enim non dolor ad nostrud.
          Adipisicing enim est cupidatat culpa pariatur aliqua id tempor ipsum.
          Ad nulla enim dolore ullamco occaecat mollit non veniam voluptate
          labore. Culpa aute sit exercitation ad anim ad duis ut consequat id
          irure. Ullamco id adipisicing sint proident anim eu eiusmod. Eu nisi
          magna elit cupidatat nostrud duis anim proident enim nulla. Eu eu
          veniam aute id aute. Tempor dolore dolor aute anim labore deserunt
          anim ea est est. Id est amet minim est dolor et eu excepteur. Officia
          sunt deserunt et proident ut esse aliqua ullamco nulla minim anim
          adipisicing amet sit. Commodo ea Lorem excepteur dolor quis mollit
          mollit veniam cillum minim quis ut ex. Est pariatur laborum
          consectetur sit ut anim voluptate est reprehenderit tempor. Pariatur
          aliquip culpa esse ipsum aute reprehenderit id commodo ea duis fugiat
          voluptate nostrud excepteur. Cupidatat nostrud consequat id esse non
          sunt ullamco eiusmod cillum laboris. Dolore consequat sit do cillum
          mollit labore. Ut consequat dolore et ea elit. Do ea enim irure eu
          velit aute. Irure esse aliqua ad velit culpa laboris sit nisi Lorem
          dolore nostrud. Exercitation dolore minim anim do aliqua quis
          reprehenderit do enim consectetur. Minim officia commodo amet sint
          commodo ea officia. Lorem qui dolore occaecat elit irure aliquip sunt
          tempor consectetur laborum adipisicing sunt. Laboris nisi culpa
          cupidatat fugiat ullamco deserunt mollit incididunt ipsum. Commodo
          nostrud qui esse mollit sunt velit est dolor esse irure pariatur velit
          elit cillum. Amet eiusmod culpa aute mollit Lorem do laboris sit sunt
          exercitation. Duis sunt ea ut consectetur cillum ullamco esse culpa.
          Non Lorem non incididunt labore velit cillum nulla est consequat
          nostrud ea anim.
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
