import { isNoPass } from '@cyan-ocean/ui/util/common';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { CSSProperties, ReactNode } from 'react';
import { PxType } from '../common/type';

interface Link {
  children: ReactNode;
  fontSize?: PxType;
  href: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  color?: string;
  style?: CSSProperties;
  disable?: boolean;
}

const LinkWrapper = styled.a<{ __css: any }>`
  cursor: pointer;
  display: inline-flex;
  ${(props) => props.__css};
  padding: 6px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
  .left-icon {
    padding-right: 6px;
  }
  .right-icon {
    padding-left: 6px;
  }
`;

const LinkText = styled.span``;

const Link = (props: Link) => {
  const {
    children,
    href,
    leftIcon,
    rightIcon,
    color,
    fontSize,
    disable = false,
  } = props;

  const baseStyle = css`
    color: ${color ?? '#000'};
    font-size: ${fontSize ?? '14px'};
    cursor: ${disable ? 'not-allowed' : 'pointer'};
  `;

  const resultHref = disable ? 'javascript:void(0);' : href;

  return (
    <LinkWrapper href={resultHref} __css={baseStyle}>
      {!isNoPass(leftIcon) && <div className="left-icon">{leftIcon}</div>}
      <LinkText>{children}</LinkText>
      {!isNoPass(rightIcon) && <div className="right-icon">{rightIcon}</div>}
    </LinkWrapper>
  );
};

export default Link;
