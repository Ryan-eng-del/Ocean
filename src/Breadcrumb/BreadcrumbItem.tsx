import React, { ReactNode, useContext } from 'react';
import styled, { css } from 'styled-components';
import { IsType, PxType } from '../common/type';
import { handlePx } from '../util/common';
import BreadcrumbContext from './breadcrumbContext';

const oceanBreadcrumbLightItemColor = '#4e5969';
const oceanBreadcrumbBackgroundColor = 'rgb(245, 245, 245)';
const oceanBreadcrumbHoverBackgroundColor = 'rgb(230, 230, 230)';

const getHover = (isUnderline: IsType) => {
  if (!isUnderline) {
    return css`
      background-color: ${oceanBreadcrumbHoverBackgroundColor};
    `;
  }
};

const getBackgroundColor = (isLast: IsType, outline: IsType) => {
  let back;
  if (isLast) {
    back = oceanBreadcrumbHoverBackgroundColor;
  } else {
    back = oceanBreadcrumbBackgroundColor;
  }

  if (outline && isLast) {
    back = oceanBreadcrumbBackgroundColor;
  } else if (outline) {
    back = '#fff';
  }

  return back;
};

const getUnderLine = (isUnderLine: IsType) => {
  if (isUnderLine) {
    return css`
      border-bottom: 1px solid black;
    `;
  }
};

const BreadcrumbItemWrapper = styled.div<{
  isLast: IsType;
  isOutline: IsType;
  isUnderline: IsType;
}>`
  color: ${oceanBreadcrumbLightItemColor};

  background-color: ${(props) =>
    getBackgroundColor(props.isLast, props.isOutline)};

  padding: 4px 12px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  cursor: pointer;

  :hover {
    ${(props) => getHover(props.isUnderline)}
  }

  :hover .ocean-breadcrumb-item-content {
    ${(props) => getUnderLine(props.isUnderline)}
  }

  .bread-crumb-icon {
    margin-left: -4px;
    padding-right: 10px;
  }
`;

const BreadcrumbItemContent = styled.span<{
  size: PxType;
  isUnderline: IsType;
}>`
  font-size: ${(props) => props.size};
  border-bottom: 1px solid transparent;
`;

interface BreadcrumbItem {
  children: ReactNode;
  icon?: ReactNode;
  last?: boolean;
}

const BreadcrumbItem = (props: BreadcrumbItem) => {
  const { children, icon } = props;
  const isLast = props.last;
  const breadcrumbContext = useContext(BreadcrumbContext);
  const size = handlePx(breadcrumbContext.fontSize);
  const isOutline = breadcrumbContext.outline;
  const isUnderline = breadcrumbContext.underline;

  return (
    <BreadcrumbItemWrapper
      className="ocean-breadcrumb-item-wrapper"
      isLast={isLast}
      isOutline={isOutline}
      isUnderline={isUnderline}
    >
      <>
        {icon && <span className="bread-crumb-icon">{icon}</span>}
        <BreadcrumbItemContent
          className="ocean-breadcrumb-item-content"
          size={size}
          isUnderline={isUnderline}
        >
          {children}
        </BreadcrumbItemContent>
      </>
    </BreadcrumbItemWrapper>
  );
};

export default BreadcrumbItem;
