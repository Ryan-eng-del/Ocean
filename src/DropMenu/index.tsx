import { DownOutlined, RightOutlined } from '@ant-design/icons';
import Button from '@cyan-ocean/ui/Button';
import { opacityTransition } from '@cyan-ocean/ui/Drawer/style/animation';
import styled from '@emotion/styled';
import React, { ReactNode, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { offEvent, onEvent } from '../util/dom';

const ContentWrapper = styled.div`
  transition: 330ms linear;
  position: absolute;
  box-sizing: border-box;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  outline: transparent solid 2px;
  outline-offset: 2px;
  border: 1px solid #e2e8f0;
  background-color: #fff;
  display: flex;
  flex-direction: column;

  & button {
    color: black;
    display: flex;
    justify-content: space-between;
    font-size: 15px;
  }
`;

const DropMenuItem = styled.div`
  background-color: #fff;
  position: relative;
  z-index: 19;
  display: inline-flex;

  :hover {
    .child-menu-wrapper {
      opacity: 1;
    }
  }
`;

const DropMenuWrapper = styled.div`
  ${opacityTransition('drop-menu-container')}
`;

const DropStartMenu = styled.div`
  position: relative;
  overflow: hidden;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;

  .ocean-menu-content {
    pointer-events: none;
  }
  :hover {
  }
`;

type DropMenuData = {
  content: string;
  children?: DropMenuData[];
  disabled?: boolean;
  afterIcon?: ReactNode;
  click?: () => void;
};

interface DropMenu {
  data: DropMenuData[];
  content?: string;
  as?: ReactNode;
  visible: boolean;
  setVisible: any;
  mode?: 'hover';
}

const ChildrenMenuWrapper = styled.div`
  background-color: #fff;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  outline: transparent solid 2px;
  outline-offset: 2px;
  border: 1px solid #e2e8f0;
  opacity: 0;
  left: 100%;
  width: 100%;
  position: absolute;
  transition: all ease 110ms;

  &:hover {
    opacity: 1;
  }
`;

const DropMenu = (props: DropMenu) => {
  const { content, data, visible, setVisible, as, mode } = props;
  const parentRef = useRef<any>();

  const menuClick = (e: any) => {
    e.stopPropagation();
    setVisible(!visible);
  };

  const documentClick = () => {
    setVisible(false);
  };

  useEffect(() => {
    setVisible(visible);
  }, [visible]);

  const menuItemClick = (e: any, click: any) => {
    e.stopPropagation();
    click?.();
  };

  useEffect(() => {
    visible && onEvent(window, 'click', documentClick)();
    return () => {
      visible && offEvent(window, 'click', documentClick)();
    };
  }, [visible]);

  return (
    <DropMenuWrapper className="ocean-menu-wrapper">
      <DropStartMenu
        onClick={(e) => menuClick(e)}
        onMouseEnter={(e) => {
          if (mode === 'hover') {
            menuClick(e);
          }
        }}
      >
        {as || (
          <Button
            type="primary"
            rightIcon={<DownOutlined style={{ fontSize: '14px' }} />}
            bg="#EDF2F7"
            c="black"
            _hover={{ bg: '#E2E8F0' }}
          >
            {content}
          </Button>
        )}
      </DropStartMenu>

      <CSSTransition
        classNames={'drop-menu-container'}
        in={visible}
        timeout={110}
        appear
        unmountOnExit
      >
        <ContentWrapper className="ocean-content-wrapper" ref={parentRef}>
          {data?.map((menu, index) => {
            return (
              <DropMenuItem
                key={index}
                onClick={(e) => menuItemClick(e, menu.click)}
              >
                <Button
                  type="text"
                  width={'100%'}
                  rightIcon={menu.children ? <RightOutlined /> : menu.afterIcon}
                >
                  {menu.content}
                </Button>

                {menu.children && (
                  <ChildrenMenuWrapper className="child-menu-wrapper">
                    {menu.children?.map((child, index) => {
                      return (
                        <Button
                          type="text"
                          key={index}
                          width={'100%'}
                          rightIcon={child.afterIcon}
                        >
                          {child.content}
                        </Button>
                      );
                    })}
                  </ChildrenMenuWrapper>
                )}
              </DropMenuItem>
            );
          })}
        </ContentWrapper>
      </CSSTransition>
    </DropMenuWrapper>
  );
};

export default DropMenu;
