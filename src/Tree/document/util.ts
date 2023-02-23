import { Updater } from 'use-immer';
import { TreeData, TreeNode } from './TreeItemRecursive';

const set = new Set();

export const generateNode = () => {
  let id = Math.random() * 10000;
  while (set.has(id)) {
    id = Math.random() * 1000;
  }
  set.add(id);
  return {
    anyName: 'Chapter',
    anyId: id + '',
  };
};

export const deleteNodeUtil = (
  id: string,
  setTreeData: Updater<TreeData>,
  args?: any[],
) => {
  setTreeData((draft) => {
    const recursion = (data: TreeData) => {
      if (!data) return;
      data.forEach((d: any, index) => {
        if (d.anyChild && d.anyChild.length) {
          recursion(d.anyChild);
        }
        if (id === d.anyId) {
          data.splice(index, 1);
        } else if (args && args[0] === d.anyId) {
          console.log(d, 'd');
          console.log('jkjk');
          data.splice(index, 1);
        }
      });
    };
    recursion(draft);
  });
};

export const renameNodeUtil = (
  id: string,
  setTreeData: Updater<TreeData>,
  args?: any[],
) => {
  setTreeData((draft) => {
    const recursion = (data: TreeData) => {
      if (!data) return;
      data.forEach((d: TreeNode) => {
        if (d.anyChild && d.anyChild.length) {
          recursion(d.anyChild);
        }
        if (id === d.anyId) {
          d.anyName = args![0];
        }
      });
    };
    recursion(draft);
  });
};

export const addChildChapterUtil = (
  id: string,
  setTreeData: Updater<TreeData>,
  args?: any[],
) => {
  setTreeData((draft) => {
    const recursion = (data: TreeData) => {
      if (!data) return;
      data.forEach((d: TreeNode) => {
        if (d.anyChild && d.anyChild.length) {
          recursion(d.anyChild);
        }
        if (args![0] === d.anyId) {
          d.anyChild = d.anyChild || [];
          d.anyChild.push(args![1]);
        }
      });
    };
    recursion(draft);
  });
};

export const editNodeUtil = (
  id: string,
  setEditNode: any,
  treeData: TreeData,
) => {
  const recursion = (data: TreeData) => {
    if (!data) return;
    data.forEach((d: TreeNode) => {
      if (d.anyChild && d.anyChild.length) {
        recursion(d.anyChild);
      }
      if (id === d.anyId) {
        setEditNode(d);
      }
    });
  };
  recursion(treeData);
};

export const confirmEditUtil = (
  id: string,
  setTreeData: Updater<TreeData>,
  value: string,
) => {
  setTreeData((draft) => {
    const recursion = (data: TreeData) => {
      if (!data) return;
      data.forEach((d: TreeNode) => {
        if (d.anyChild && d.anyChild.length) {
          recursion(d.anyChild);
        }
        if (id === d.anyId) {
          d.anyName = value;
        }
      });
    };
    recursion(draft);
  });
};
