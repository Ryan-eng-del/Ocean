import { CheckOutlined, DownOutlined, LeftOutlined } from '@ant-design/icons';
import { ocean } from '@cyan-ocean/ui/System';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { TransitionGroup } from 'react-transition-group';
import TreeContext from '../TreeContext';
import TreeEditFocus from '../TreeEditFocus';
import type { TreeFocus } from '../TreeFocus';
import Collapse, { CollapseRef } from './Collapse';
import {
  IconContainer,
  TreeItemRoot,
  TreeLabel,
  TreeLabelContainer,
  TreeLabelTool,
} from './style';

interface TreeItem extends Partial<TreeEditFocus>, Partial<TreeFocus> {
  label: string;
  children?: React.ReactNode;
  id: string;
  addChildNode?: (id: string) => void;
  deleteNode?: (id: string) => void;
  editNode?: (id: string) => void;
  editMode?: boolean;
}

const TreeItem = (props: TreeItem) => {
  const { id } = props;
  const collapseRef = useRef<CollapseRef>(null);
  const treeContext = useContext(TreeContext);
  const [select, setSelect] = useState(false);
  const mode = treeContext?.mode || 'interact';
  const TreeTool = ['添加', '编辑', '删除'];

  const isSelect = id === treeContext!.select;
  const isExpand = !!treeContext!.expand.find((i) => i === id);
  const temp = () => {};

  useEffect(() => {
    treeContext!.handleExpand(id);
  }, []);

  console.log(treeContext?.selectable, 'context');

  const clickTreeLabel = (e: React.MouseEvent) => {
    e.stopPropagation();
    collapseRef.current?.clickCollapse();
    treeContext?.handleExpand(id);
    treeContext?.handleSelect(id);
  };

  return (
    <TreeItemRoot>
      {props.editMode ? (
        <TreeEditFocus
          confirmEdit={props.confirmEdit || temp}
          cancelEdit={props.cancelEdit || temp}
          onEditInputChange={props.onEditInputChange || temp}
          bindValue={props.bindValue}
          key={id}
        />
      ) : (
        <ocean.div display={'flex'} align="center">
          {treeContext?.selectable && (
            <ocean.div
              __css={{
                w: 3.5,
                h: 3.5,
                c: select ? '#fff' : undefined,
                border: '1px',
                borderColor: 'blue.500',
                bg: select ? 'blue.500' : undefined,
                display: 'flex',
                justify: 'center',
                align: 'center',
                transition: 'all ease 110ms',
                fontSize: '12px',
              }}
              onClick={() => setSelect(!select)}
            >
              {select && <CheckOutlined />}
            </ocean.div>
          )}
          <TreeLabel onClick={(e) => clickTreeLabel(e)} isSelect={isSelect}>
            <TreeLabelContainer>
              <IconContainer isChildren={!!props.children}>
                {!isExpand ? <LeftOutlined /> : <DownOutlined />}
              </IconContainer>
              {props.label}
            </TreeLabelContainer>
            {mode === 'interact' && (
              <TreeLabelTool
                className={'edit-tool-wrapper'}
                onClick={(e) => e.stopPropagation()}
              >
                {!treeContext?.tool ? (
                  TreeTool.map((tool, index) => (
                    <span
                      key={index}
                      onClick={() => {
                        if (index === 0 && props.addChildNode) {
                          props.addChildNode(id);
                        } else if (index === 1 && props.editNode) {
                          props.editNode(id);
                        } else if (props.deleteNode) {
                          props.deleteNode(id);
                        }
                      }}
                    >
                      {tool}
                    </span>
                  ))
                ) : (
                  <>{treeContext?.tool}</>
                )}
              </TreeLabelTool>
            )}
          </TreeLabel>
        </ocean.div>
      )}

      {props.children && (
        <TransitionGroup>
          <Collapse ref={collapseRef}>{props.children}</Collapse>
        </TransitionGroup>
      )}
    </TreeItemRoot>
  );
};

export default TreeItem;
