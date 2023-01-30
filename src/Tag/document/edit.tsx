import { Button, Input, Tag } from 'Ocean';
import React, { useState } from 'react';

export default function Basic() {
  const [isExit, setIsExit] = useState(false);
  const [tagList, setTagList] = useState(['Tag 1', 'Tag 2', 'Tag 3']);
  const [addInputValue, setAddInputValue] = useState('');
  const tagStyle = { margin: '0 12px' };

  return (
    <>
      <div style={{ display: 'flex' }}>
        {tagList.map((tag, index) => {
          return (
            <Tag style={tagStyle} key={index} closeable>
              {tag}
            </Tag>
          );
        })}
      </div>
      <br />
      {isExit ? (
        <Input
          width={100}
          onChange={(value: string) => setAddInputValue(value)}
          onBlur={() => {
            if (addInputValue) {
              setIsExit(false);
              tagList.push(addInputValue);
              setTagList(tagList);
              setAddInputValue('');
            }
          }}
          onKeyup={(e) => {
            if (e.nativeEvent.keyCode === 13) {
              setIsExit(false);
              tagList.push(addInputValue);
              setTagList(tagList);
              setAddInputValue('');
            }
          }}
          autoFocus
        />
      ) : (
        <Button width={120} onClick={() => setIsExit(true)}>
          Add New Tag
        </Button>
      )}
    </>
  );
}
