import React, { useState } from 'react';
import { TreeContainer } from './style';
import TreeContext from './TreeContext';

interface TreeProps {
  tool?: React.ReactNode;
  children: React.ReactNode;
  mode?: 'preview' | 'interact';
  selectable?: boolean;
}
const Tree = (props: TreeProps) => {
  const { tool, mode, selectable = false } = props;
  const [select, setSelect] = useState<string>('');
  const [expand, setExpand] = useState<string[]>([]);

  type expandSelect = (id: string) => void;

  const expandSelect = (callback: expandSelect) => (id: string) => {
    callback(id);
  };

  const handleExpand = expandSelect((id: string) => {
    setExpand((ids) => {
      const isFind = !!ids.find((i) => i === id);

      if (isFind) {
        return ids.filter((i) => i !== id);
      }
      return ids.concat(id);
    });
  });

  const handleSelect = expandSelect((id: string) => {
    if (select === id) return;
    setSelect(id);
  });

  return (
    <TreeContext.Provider
      value={{
        expand,
        select,
        handleExpand,
        handleSelect,
        tool,
        mode,
        selectable,
      }}
    >
      <TreeContainer>{props.children}</TreeContainer>
    </TreeContext.Provider>
  );
};

export default Tree;
