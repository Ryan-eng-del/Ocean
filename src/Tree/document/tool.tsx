import { Button, GlobalThemeProvider, Tree, TreeItem } from '@cyan-ocean/ui';
import React from 'react';
const TreeItemDemo = () => {
  return (
    <GlobalThemeProvider>
      <Tree
        mode="interact"
        tool={
          <Button type="text" h={5} c="#fff">
            拓展工具栏
          </Button>
        }
      >
        <TreeItem label="第一章" id="1">
          <TreeItem label="第二章" id="2">
            <TreeItem label="第四章" id="3"></TreeItem>
          </TreeItem>
          <TreeItem label="第三章" id="4"></TreeItem>
        </TreeItem>
      </Tree>
    </GlobalThemeProvider>
  );
};

export default TreeItemDemo;
