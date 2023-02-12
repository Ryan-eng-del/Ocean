import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { IsType, PxType } from 'Ocean/common/type';

const oceanBreadcrumbLightItemColor = '#4e5969';
const oceanBreadcrumbBackgroundColor = 'rgb(245, 245, 245)';
const oceanBreadcrumbHoverBackgroundColor = 'rgb(230, 230, 230)';

export const getHover = (isUnderline: IsType) => {
  if (!isUnderline) {
    return css`
      background-color: ${oceanBreadcrumbHoverBackgroundColor};
    `;
  }
};

export const getBackgroundColor = (isLast: IsType, outline: IsType) => {
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

export const getUnderLine = (isUnderLine: IsType) => {
  if (isUnderLine) {
    return css`
      border-bottom: 1px solid black;
    `;
  }
};

export const BreadcrumbItemWrapper = styled.div<{
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

export const BreadcrumbItemContent = styled.span<{
  size: PxType;
  isUnderline: IsType;
}>`
  font-size: ${(props) => props.size};
  border-bottom: 1px solid transparent;
`;
