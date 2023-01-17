import Button from 'Ocean/Button';
import { opacityTransition } from 'Ocean/Drawer/style/animation';
import React, { ReactNode, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import { offEvent, onEvent } from '../util/dom';

const ContentWrapper = styled.div`
  transition: 330ms linear;
  width: 210px;
  box-sizing: border-box;
  position: absolute;
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
`;

const DropMenuWrapper = styled.div`
  ${opacityTransition('drop-menu-container')}
`;

const DropStartMenu = styled.div`
  position: relative;
  overflow: hidden;
  width: 100px;
  height: 40px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  .ocean-menu-content {
    pointer-events: none;
  }
`;

type DropMenuData = {
  content: string;
  children?: DropMenuData[];
  disabled?: boolean;
  icon?: ReactNode;
  click?: () => void;
};

interface DropMenu {
  data: DropMenuData[];
  content?: string;
  as?: ReactNode;
  visible: boolean;
  setVisible: any;
}

const DropMenu = (props: DropMenu) => {
  const { content, data, visible, setVisible, as } = props;

  // const [menuVisible, setVisible] = useState(visible);

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
    <DropMenuWrapper>
      <DropStartMenu onClick={(e) => menuClick(e)}>
        {as || (
          <Button type="text">
            <div className="ocean-menu-content">{content}</div>
          </Button>
        )}
      </DropStartMenu>

      <CSSTransition
        classNames={'drop-menu-container'}
        in={visible}
        timeout={330}
        appear
        unmountOnExit
      >
        <ContentWrapper className="ocean-content-wrapper">
          {data?.map((menu, index) => {
            return (
              <DropMenuItem
                key={index}
                onClick={(e) => menuItemClick(e, menu.click)}
              >
                <Button type="text">
                  {menu.content}
                  {menu?.icon}
                </Button>
              </DropMenuItem>
            );
          })}
        </ContentWrapper>
      </CSSTransition>
    </DropMenuWrapper>
  );
};

export default DropMenu;
