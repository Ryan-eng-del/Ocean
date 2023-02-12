import { Button, Input } from 'Ocean';
import React from 'react';

export interface TreeFocus {
  confirmAdd: () => void;
  cancelAdd: () => void;
  onAddInputChange: (value: string, e: React.ChangeEvent<HTMLElement>) => void;
  bindValue?: string;
}

const TreeFocus = (props: TreeFocus) => {
  const { cancelAdd, confirmAdd, onAddInputChange } = props;
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Input
        autoFocus
        onChange={(e) => {
          onAddInputChange(e.target.value, e);
        }}
        style={{ marginLeft: '12px', marginRight: '15px' }}
      />

      <Button
        type={'outline'}
        onClick={() => confirmAdd()}
        style={{ marginRight: '15px' }}
      >
        确认
      </Button>

      <Button
        type={'danger'}
        onClick={() => cancelAdd()}
        style={{ marginRight: '15px' }}
      >
        取消
      </Button>
    </div>
  );
};
export default TreeFocus;
