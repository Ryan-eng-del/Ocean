import { Input } from 'antd';
import { Button } from 'Ocean';
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
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Input
        autoFocus
        onChange={(e) => {
          onEditInputChange(e.target.value);
        }}
        style={{ marginLeft: '12px', marginRight: '15px' }}
        onClick={(e: any) => e.stopPropagation()}
        defaultValue={props.bindValue}
      />

      <Button
        type={'outline'}
        onClick={() => confirmEdit()}
        style={{ marginRight: '15px' }}
        width={80}
        height={37}
      >
        确认
      </Button>

      <Button
        type={'danger'}
        onClick={() => cancelEdit()}
        style={{ marginRight: '15px' }}
        width={80}
        height={37}
      >
        取消
      </Button>
    </div>
  );
};
export default TreeEditFocus;
