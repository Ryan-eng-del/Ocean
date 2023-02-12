import styled from '@emotion/styled';
import React, { ReactNode, useCallback, useMemo, useState } from 'react';
import { handlePx } from '../util/common';
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
  width?: string | number;
}

const MenuContainer = styled.div<{ width: string }>`
  width: ${(props) => props.width};
`;

const Menu = (props: IMenu) => {
  type MenuKey = {
    selectKey: React.Key;
    expandKey: React.Key[];
    curExpandKey: React.Key;
  };

  const [MenuKeys, setMenuKeys] = useState<MenuKey>({
    selectKey: props.curSelectKey || props.items[0].key,
    expandKey: [],
    curExpandKey: '',
  });
  const width = handlePx(props.width || '250px');

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
      const result = {
        selectKey: key,
        curExpandKey: key,
        expandKey: [...draft.expandKey],
      };

      if (!draft.expandKey.includes(key)) {
        result.expandKey.push(key);
      } else {
        draft.expandKey.forEach((k, index) => {
          if (k === key) {
            result.expandKey.splice(index, 1);
          }
        });
      }
      return result;
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

  return (
    <MenuContainer className="menu-container" width={width}>
      {generateChildrenUI(props.items)}
    </MenuContainer>
  );
};
export default Menu;
