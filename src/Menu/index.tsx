import React, { ReactNode, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import { useImmer } from 'use-immer';
import MenuNode from './MenuNode';

export interface MenuItem {
  key: React.Key;
  label: React.ReactNode;
  icon?: React.ReactNode;
  children?: MenuItem[];
}

export interface IMenu {
  items: MenuItem[];
  curSelectKey?: React.Key;
  handleRouteChange?: (
    key: React.Key,
    e: React.MouseEvent<HTMLElement, MouseEvent>,
  ) => void;
  ableToggle?: boolean;
}

const MenuContainer = styled.div`
  width: 250px;
`;

const Menu = (props: IMenu) => {
  type MenuKey = {
    selectKey: React.Key;
    expandKey: React.Key[];
    curExpandKey: React.Key;
  };

  const [MenuKeys, setMenuKeys] = useImmer<MenuKey>({
    selectKey: props.curSelectKey || props.items[0].key,
    expandKey: [],
    curExpandKey: '',
  });
  const getParentKey = useCallback((item: MenuItem[]) => {
    const map = new Map();
    const recursive = (
      item: MenuItem[],
      level: number,
      parent: React.Key | null,
    ) => {
      item.forEach((i) => {
        map.set(i.key, parent);
        if (i.children) {
          recursive(i.children, level + 1, i.key);
        }
      });
    };
    recursive(item, 1, null);
    return map;
  }, []);

  const map = getParentKey(props.items);

  const memoParent = useMemo(() => {
    const parent = [];
    const getParent = (key: React.Key): React.Key | undefined => map.get(key);
    parent.push(MenuKeys.selectKey);
    let p = getParent(MenuKeys.selectKey);
    while (p) {
      parent.push(p);
      p = getParent(p);
    }
    return parent;
  }, [MenuKeys.selectKey]);

  const clickSelectMenu = (
    key: React.Key,
    e: React.MouseEvent<HTMLElement, MouseEvent>,
  ) => {
    if (props.handleRouteChange) props.handleRouteChange(key, e);

    setMenuKeys((draft) => {
      draft.selectKey = key;
      draft.curExpandKey = key;
      if (!draft.expandKey.includes(key)) {
        draft.expandKey.push(key);
      } else {
        draft.expandKey.forEach((k, index) => {
          if (k === key) {
            draft.expandKey.splice(index, 1);
          }
        });
      }
    });
  };

  const generateChildrenUI = (item: MenuItem[]): ReactNode => {
    const recursive = (item: MenuItem[], level: number): ReactNode => {
      return item.map((c) => {
        const ref = React.createRef();
        return (
          <MenuNode
            memoParent={memoParent}
            key={c.key}
            refContainer={ref}
            level={level}
            menuItem={c}
            isToggle={props.ableToggle}
            selectKey={MenuKeys.selectKey}
            curToggleKey={MenuKeys.curExpandKey}
            clickSelectMenu={clickSelectMenu}
            recursive={recursive}
          />
        );
      });
    };
    return recursive(item, 1);
  };

  return <MenuContainer>{generateChildrenUI(props.items)}</MenuContainer>;
};
export default Menu;
