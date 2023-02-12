import { Button, Input } from 'Ocean';
import React from 'react';

interface TreeEditFocus {
  confirmEdit: () => void;
  cancelEdit: () => void;
  onEditInputChange: (e: any) => void;
  bindValue?: string;
}

const TreeEditFocus = (props: TreeEditFocus) => {
  const { cancelEdit, confirmEdit, onEditInputChange } = props;
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Input
        autoFocus
        onChange={(e) => {
          onEditInputChange(e.target.value);
        }}
        style={{ marginLeft: '12px', marginRight: '15px' }}
        onClick={(e: any) => e.stopPropagation()}
        defaultValue={props.bindValue}
        flex={1}
      />

      <div>
        <Button type={'outline'} onClick={() => confirmEdit()}>
          确认
        </Button>

        <Button type={'danger'} onClick={() => cancelEdit()}>
          取消
        </Button>
      </div>
    </div>
  );
};
export default TreeEditFocus;
