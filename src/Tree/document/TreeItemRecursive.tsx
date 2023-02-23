import { Button, GlobalThemeProvider, Tree, TreeItem } from '@cyan-ocean/ui';
import React, { useCallback, useState } from 'react';

import { Updater, useImmer } from 'use-immer';

import TreeFocus from '../TreeFocus';
import {
  addChildChapterUtil,
  confirmEditUtil,
  deleteNodeUtil,
  editNodeUtil,
  generateNode,
  renameNodeUtil,
} from './util';

export type TreeNode = {
  anyName: string;
  anyId: string;
  anyChild?: TreeNode[];
};

export type TreeData = TreeNode[];

const TreeItemDemo = () => {
  const [treeData, setTreeData] = useImmer<TreeData>([
    {
      anyName: 'Chapter1',
      anyId: '0',
      anyChild: [{ anyName: 'ClassTime1-1', anyId: '0-0' }],
    },

    {
      anyName: 'Chapter2',
      anyId: '1',
      anyChild: [{ anyName: 'ClassTime2-1', anyId: '1-1' }],
    },
    { anyName: 'Chapter3', anyId: '2' },
  ]);

  const [interactState, setInteractState] = useImmer({
    addFocus: false,
    editFocus: false,
    inputValue: '',
  });

  const [curAddNode, setCurAddNode] = useState<TreeNode>(generateNode());
  const [editNode, setEditNode] = useState<TreeNode | null>(null);

  type Trigger = (
    id: string,
    setTreeData: Updater<TreeData>,
    args?: any[],
  ) => void;

  const eventCallback =
    (trigger: Trigger) =>
    (...args: any[]) => {
      trigger(curAddNode.anyId, setTreeData, args);
    };

  /*点击添加根章节*/
  const addChapter = useCallback(() => {
    const chapterNode = generateNode();
    setCurAddNode(() => chapterNode);
    setTreeData((draft) => {
      draft.push(chapterNode);
    });
    setInteractState((draft) => {
      draft.addFocus = true;
    });
  }, [treeData]);

  /* 点击添加子章节 */
  const addChidChapter = useCallback(
    (id: string) => {
      const chapterNode = generateNode();
      setCurAddNode(() => chapterNode);
      eventCallback(addChildChapterUtil)(id, chapterNode);

      setInteractState((draft) => {
        draft.addFocus = true;
      });
    },
    [treeData],
  );

  /* 确认添加 */
  const confirmAddChapter = useCallback(async () => {
    eventCallback(renameNodeUtil)(interactState.inputValue);
    setInteractState((draft) => {
      draft.addFocus = false;
      draft.inputValue = '';
    });
  }, [interactState.inputValue, treeData]);

  /* 取消添加 */
  const cancelAddChapter = useCallback(() => {
    eventCallback(deleteNodeUtil)();
    setInteractState((draft) => {
      draft.addFocus = false;
    });
  }, [treeData]);

  /* 取消编辑 */
  const cancelEditChapter = () => {
    setInteractState((draft) => {
      draft.editFocus = false;
    });
  };

  /* 确认编辑 */
  const confirmEditChapter = () => {
    confirmEditUtil(editNode!.anyId, setTreeData, interactState.inputValue);
    setInteractState((draft) => {
      draft.editFocus = false;
      draft.inputValue = '';
    });
    setEditNode(null);
  };

  /* 删除节点 */
  const deleteChapter = useCallback(
    (id: string) => {
      eventCallback(deleteNodeUtil)(id);
    },
    [treeData],
  );

  /* 编辑章节 */
  const editChapter = useCallback(
    (id: string) => {
      setInteractState((draft) => {
        draft.editFocus = true;
      });

      editNodeUtil(id, setEditNode, treeData);
    },
    [editNode, treeData],
  );

  const generateUI = (treeData: TreeData) => {
    return treeData.map((item: TreeNode) => {
      if (item?.anyChild && item.anyChild?.length > 0) {
        return (
          <TreeItem
            id={item.anyId}
            label={item.anyName}
            key={item.anyId}
            addChildNode={addChidChapter}
            editNode={editChapter}
            deleteNode={deleteChapter}
            editMode={editNode?.anyId === item.anyId && interactState.editFocus}
            confirmEdit={confirmEditChapter}
            cancelEdit={cancelEditChapter}
            onEditInputChange={(value: string) => {
              setInteractState((draft) => {
                draft.inputValue = value;
              });
            }}
            onAddInputChange={(value: string) => {
              setInteractState((draft) => {
                draft.inputValue = value;
              });
            }}
            bindValue={item.anyName}
          >
            {generateUI(item.anyChild)}
          </TreeItem>
        );
      }

      if (item.anyId === curAddNode.anyId) {
        return interactState.addFocus ? (
          <TreeFocus
            cancelAdd={cancelAddChapter}
            confirmAdd={confirmAddChapter}
            onAddInputChange={(value: string) => {
              setInteractState((draft) => {
                draft.inputValue = value;
              });
            }}
            key={item.anyId}
          />
        ) : (
          <TreeItem
            id={item.anyId}
            label={item.anyName}
            key={item.anyId}
            addChildNode={addChidChapter}
            editNode={editChapter}
            deleteNode={deleteChapter}
            editMode={editNode?.anyId === item.anyId && interactState.editFocus}
            confirmEdit={confirmEditChapter}
            cancelEdit={cancelEditChapter}
            onEditInputChange={(value: string) => {
              setInteractState((draft) => {
                draft.inputValue = value;
              });
            }}
            onAddInputChange={(value: string) => {
              setInteractState((draft) => {
                draft.inputValue = value;
              });
            }}
            bindValue={item.anyName}
          />
        );
      }

      return (
        <TreeItem
          id={item.anyId}
          label={item.anyName}
          key={item.anyId}
          addChildNode={addChidChapter}
          editNode={editChapter}
          deleteNode={deleteChapter}
          editMode={editNode?.anyId === item.anyId && interactState.editFocus}
          confirmEdit={confirmEditChapter}
          cancelEdit={cancelEditChapter}
          onEditInputChange={(value: string) => {
            setInteractState((draft) => {
              draft.inputValue = value;
            });
          }}
          onAddInputChange={(value: string) => {
            setInteractState((draft) => {
              draft.inputValue = value;
            });
          }}
          bindValue={item.anyName}
        />
      );
    });
  };

  const TreeUI = generateUI(treeData);

  return (
    <GlobalThemeProvider>
      <Button
        type={'text'}
        style={{ marginBottom: '20px' }}
        onClick={addChapter}
      >
        添加根目录
      </Button>
      <Tree>{TreeUI}</Tree>
    </GlobalThemeProvider>
  );
};

export default TreeItemDemo;
