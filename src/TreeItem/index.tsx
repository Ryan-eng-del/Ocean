import { DownOutlined, LeftOutlined } from '@ant-design/icons';
import React, { useContext, useEffect, useRef } from 'react';
import { TransitionGroup } from 'react-transition-group';
import TreeContext from '../Tree/TreeContext';
import TreeEditFocus from '../Tree/TreeEditFocus';
import type { TreeFocus } from '../Tree/TreeFocus';
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

  const mode = treeContext?.mode || 'interact';
  const TreeTool = ['添加', '编辑', '删除'];

  const isSelect = id === treeContext!.select;
  const isExpand = !!treeContext!.expand.find((i) => i === id);
  const temp = () => {};

  useEffect(() => {
    treeContext!.handleExpand(id);
  }, []);

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
              {!treeContext?.tool
                ? TreeTool.map((tool, index) => (
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
                : treeContext?.tool}
            </TreeLabelTool>
          )}
        </TreeLabel>
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
