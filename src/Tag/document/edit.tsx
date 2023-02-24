import {
  Button,
  GlobalThemeProvider,
  Input,
  TabCloseIcon,
  TabLabel,
  Tag,
} from '@cyan-ocean/ui';
import React, { useState } from 'react';

export default function Basic() {
  const [isExit, setIsExit] = useState(false);
  const [tagList, setTagList] = useState(['Tag 1', 'Tag 2', 'Tag 3']);
  const [addInputValue, setAddInputValue] = useState('');

  return (
    <GlobalThemeProvider>
      <div style={{ display: 'flex' }}>
        {tagList.map((tag, index) => {
          return (
            <Tag mx={4} key={index}>
              <TabLabel>{tag}</TabLabel>
              <TabCloseIcon />
            </Tag>
          );
        })}
      </div>
      <br />
      {isExit ? (
        <Input
          value={addInputValue}
          onChange={(e) => setAddInputValue(e.target.value)}
          onBlur={() => {
            if (addInputValue) {
              setIsExit(false);
              setTagList((pre) => pre.concat(addInputValue));
              setAddInputValue('');
            }
          }}
          autoFocus
        />
      ) : (
        <Button onClick={() => setIsExit(true)}>Add New Tag</Button>
      )}
    </GlobalThemeProvider>
  );
}
