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
          {
            content: 'Create a File',
            click: () => setVisible(false),
            children: [
              { content: 'Child Menu 1', click: () => setVisible(false) },
              { content: 'Child Menu 2', click: () => setVisible(false) },
              { content: 'Child Menu 3', click: () => setVisible(false) },
            ],
          },
        ]}
        content="Actions"
      />
    </GlobalThemeProvider>
  );
};

export default Basic;
