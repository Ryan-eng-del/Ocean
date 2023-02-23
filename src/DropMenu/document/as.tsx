import { Button, DropMenu, GlobalThemeProvider } from '@cyan-ocean/ui';
import React, { useState } from 'react';

const Basic = () => {
  const [visible, setVisible] = useState(false);

  return (
    <GlobalThemeProvider>
      <DropMenu
        setVisible={setVisible}
        visible={visible}
        data={[
          { content: 'Download' },
          { content: 'Copy' },
          { content: '关闭菜单', click: () => setVisible(false) },
        ]}
        content="Actions"
        as={<Button type="primary">Actions</Button>}
      />
    </GlobalThemeProvider>
  );
};

export default Basic;
