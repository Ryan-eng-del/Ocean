import { GlobalFontSize, GlobalMargin } from '@cyan-ocean/ui/common/variable';
import { isNoPass } from '@cyan-ocean/ui/util/common';
import styled from '@emotion/styled';
import React, { CSSProperties, ReactNode } from 'react';
import EmptySvg from './empty';

interface Empty {
  children?: ReactNode;
  icon?: ReactNode;
  iconStyle?: CSSProperties;
  description?: ReactNode;
}

const EmptyWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const EmptyDesc = styled.div<{ isDesc: boolean }>`
  font-size: ${GlobalFontSize.small};
  margin-top: ${(props) => (!props.isDesc ? GlobalMargin.lg : undefined)};
`;

const ChildrenWrapper = styled.div<{ isChildren: boolean }>`
  margin-top: ${(props) => (!props.isChildren ? GlobalMargin.lg : undefined)};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Empty = (props: Empty) => {
  const { children, icon, iconStyle, description } = props;

  const isDesc = isNoPass(description);
  const isChildren = isNoPass(children);
  return (
    <EmptyWrapper>
      <div style={iconStyle}> {icon || <EmptySvg />}</div>
      <EmptyDesc isDesc={isDesc}>{description}</EmptyDesc>
      <ChildrenWrapper isChildren={isChildren}>{children}</ChildrenWrapper>
    </EmptyWrapper>
  );
};

export default Empty;
