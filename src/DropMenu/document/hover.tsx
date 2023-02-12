import { DropMenu, GlobalThemeProvider } from 'Ocean';
import React, { useState } from 'react';

const Basic = () => {
  const [visible, setVisible] = useState(false);

  return (
    <GlobalThemeProvider>
      <DropMenu
        setVisible={setVisible}
        visible={visible}
        data={[
          { content: 'Download', click: () => setVisible(false) },
          { content: 'Copy', click: () => setVisible(false) },
          { content: 'Create a File', click: () => setVisible(false) },
        ]}
        content="Actions"
        mode="hover"
      />
    </GlobalThemeProvider>
  );
};

export default Basic;
