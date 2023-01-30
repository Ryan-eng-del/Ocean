import { CloseOutlined } from '@ant-design/icons';
import { GlobalColor } from 'Ocean/common/variable';
import { opacityTransition } from 'Ocean/Drawer/style/animation';
import { isNoPass } from 'Ocean/util/common';
import React, { CSSProperties, ReactNode, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { SizeType } from '../common/type';

interface Tag {
  size?: SizeType;
  fontColor?: string;
  tagColor?: string;
  closeable?: boolean;
  children: any;
  style?: CSSProperties;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  closeCallback?: () => void;
  clickCallback?: () => void;
}

const TagContainer = styled.div`
  ${opacityTransition('tag-wrapper')}
`;
const TagWrapper = styled.div<{
  __css: FlattenSimpleInterpolation;
}>`
  border-radius: 4px;
  display: flex;
  align-items: center;
  position: relative;
  padding: 8px;
  box-sizing: border-box;

  ${(props) => props.__css};

  .close-icon {
    position: absolute;
    right: 1px;
    top: 1px;
    color: rgba(255, 255, 255, 0.5);

    &:hover {
      color: #fff;
    }
  }
`;

const Tag = (props: Tag) => {
  const {
    size = 'medium',
    fontColor,
    tagColor,
    closeable = false,
    children,
    style,
    leftIcon,
    rightIcon,
    closeCallback,
    clickCallback,
  } = props;

  const [show, setShow] = useState(true);

  // =============== computed css style ===============
  const [width, height, fontSize] = ((size): string[] => {
    let sizeMap = {
      small: ['39px', '20px', '12px'],
      medium: ['43px', '24px', '14px'],
      large: ['56px', '32px', '16px'],
    };

    return sizeMap[size];
  })(size);

  const [widthWithIcon, heightWithIcon] = ((size): string[] => {
    let sizeMap = {
      small: ['65px', '20px'],
      medium: ['70px', '24px'],
      large: ['83px', '32px'],
    };

    return sizeMap[size];
  })(size);

  const isNoPassIcon = isNoPass(leftIcon) && isNoPass(rightIcon);

  // =============== baseCss ================
  const baseStyle = css`
    background-color: ${tagColor ?? GlobalColor.OceanPrimaryColor};
    color: ${fontColor ?? '#fff'};
    width: ${isNoPassIcon && !closeable ? width : widthWithIcon};
    height: ${isNoPassIcon && !closeable ? height : heightWithIcon};
    font-size: ${fontSize};
    justify-content: ${isNoPassIcon ? 'center' : 'space-between'};
  `;

  // =============== event function ====================
  const closeTag = () => {
    setShow(false);
    closeCallback?.();
  };

  const click = () => {
    clickCallback?.();
  };

  return (
    <TagContainer onClick={click}>
      <CSSTransition
        classNames={'tag-wrapper'}
        in={show}
        timeout={330}
        appear
        unmountOnExit
      >
        <TagWrapper __css={baseStyle} style={style}>
          {!isNoPass(leftIcon) && <div>{leftIcon}</div>}
          {children}
          {!closeable && !isNoPass(rightIcon) && <div>{rightIcon}</div>}
          {closeable && (
            <CloseOutlined className="close-icon" onClick={closeTag} />
          )}
        </TagWrapper>
      </CSSTransition>
    </TagContainer>
  );
};

export default Tag;
