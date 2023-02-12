import { DownOutlined, LeftOutlined } from '@ant-design/icons';
import React, { useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './collapse.css';
import type { MenuItem } from './index';
import {
  ChildMenu,
  FirstMenuItemContainer,
  IconWrapper,
  MenuItemContainer,
  MenuNodeContainer,
  RowWrapper,
} from './style';

interface MenuNode {
  refContainer: React.RefObject<any>;
  level: number;
  curToggleKey: React.Key;
  menuItem: MenuItem;
  selectKey: React.Key;
  clickSelectMenu: (
    key: React.Key,
    e: React.MouseEvent<HTMLElement, MouseEvent>,
  ) => void;
  recursive: (item: MenuItem[], level: number) => React.ReactNode;
  isToggle?: boolean | undefined;
  memoParent: React.Key[];
}
const MenuNode = React.forwardRef((props: MenuNode) => {
  const [expand, setExpand] = useState(true);
  const {
    menuItem: c,
    level,
    refContainer,
    selectKey,
    clickSelectMenu,
    recursive,
  } = props;
  const heightRef = useRef('');
  const isShowIcon = c.children && !!c.children.length;

  useEffect(() => {
    if (props.isToggle && isShowIcon) {
      if (!props.memoParent.includes(c.key)) {
        setExpand(false);
      }
    }
  }, [props.memoParent, props.isToggle, isShowIcon]);

  const getWrapperHeight = () => refContainer.current.clientHeight + 'px';
  const collapsedSize = 0;
  const clickExpand = () => {
    setExpand(() => !expand);
  };

  type callback = (
    node: HTMLElement,
    heightRef: React.MutableRefObject<string>,
  ) => void;

  const transitionCallback = (callback: callback) => () => {
    callback(refContainer.current, heightRef);
  };

  const handleOnEnter = transitionCallback((node: HTMLElement) => {
    node.style['height'] = collapsedSize + 'px';
  });

  const handleEntering = transitionCallback((node: HTMLElement) => {
    node.style['height'] = heightRef.current;
  });

  const handelEntered = transitionCallback(
    (node: HTMLElement, heightRef: React.MutableRefObject<string>) => {
      node.style['height'] = 'auto';
      heightRef.current = getWrapperHeight();
    },
  );

  const handleOnExit = transitionCallback(
    (node: HTMLElement, heightRef: React.MutableRefObject<string>) => {
      const height = node.clientHeight + 'px';
      node.style['height'] = height;
      if (!heightRef.current) {
        heightRef.current = height;
      }
    },
  );

  const handleOnExiting = transitionCallback(() => {
    refContainer.current.style['height'] = 0;
  });

  return (
    <CSSTransition
      in={expand}
      nodeRef={refContainer}
      timeout={330}
      classNames={'expand'}
      onEnter={handleOnEnter}
      onEntering={handleEntering}
      onEntered={handelEntered}
      onExit={handleOnExit}
      onExiting={handleOnExiting}
    >
      <MenuNodeContainer
        level={level}
        key={c.key}
        onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) => {
          e.stopPropagation();
          clickExpand();
        }}
      >
        <>
          <MenuItemContainer
            onClick={(e) => clickSelectMenu(c.key, e)}
            curKey={c.key}
            selectKey={selectKey}
          >
            <FirstMenuItemContainer>
              <div>
                <IconWrapper>{c.icon}</IconWrapper>
                <span>{c.label}</span>
              </div>
              {isShowIcon && (
                <RowWrapper>
                  {!expand ? <LeftOutlined /> : <DownOutlined />}
                </RowWrapper>
              )}
            </FirstMenuItemContainer>
          </MenuItemContainer>

          <ChildMenu ref={refContainer}>
            {c.children && recursive(c.children, level + 1)}
          </ChildMenu>
        </>
      </MenuNodeContainer>
    </CSSTransition>
  );
});

export default MenuNode;
