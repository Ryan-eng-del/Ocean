import { DropMenu } from 'Ocean';
import React, { useState } from 'react';

const Basic = () => {
  const [visible, setVisible] = useState(false);

  return (
    <DropMenu
      setVisible={setVisible}
      visible={visible}
      data={[
        { content: 'Download', click: () => setVisible(false) },
        { content: 'Copy', click: () => setVisible(false) },
        { content: 'Create a File', click: () => setVisible(false) },
      ]}
      content="下拉菜单"
    />
  );
};

export default Basic;
