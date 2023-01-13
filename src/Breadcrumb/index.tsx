import React, { Children, Fragment, ReactNode } from 'react';
import styled from 'styled-components';
import { PxType } from '../common/type';
import BreadcrumbContext from './breadcrumbContext';
import BreadcrumbItem from './BreadcrumbItem';

interface Breadcrumb {
  children: ReactNode;
  separator?: ReactNode;
  fontSize?: PxType;
  outline?: boolean;
  underline?: boolean;
}

const oceanBreadcrumbLightSeparatorColor = '#cdd1d8';

const BreadcrumbWrapper = styled.div`
  display: flex;
  align-items: center;
  .ocean-breadcrumb-separator {
    margin: 0 12px;
    color: ${oceanBreadcrumbLightSeparatorColor};
  }
`;

const Breadcrumb = (props: Breadcrumb) => {
  const {
    children,
    separator = '/',
    fontSize = '13px',
    outline = false,
    underline = false,
  } = props;
  const breadcrumbList = Children.toArray(children);
  const isLastItem = (index: number) => index === breadcrumbList.length - 1;

  return (
    <BreadcrumbContext.Provider value={{ fontSize, outline, underline }}>
      <BreadcrumbWrapper className="ocean-bread-crumb-wrapper">
        {Children.map(breadcrumbList, (breadcrumb: any, index) => {
          let lastBreadcrumb;
          const isLast = isLastItem(index);
          if (isLast) {
            lastBreadcrumb = React.cloneElement(
              <BreadcrumbItem>{breadcrumb.props.children}</BreadcrumbItem>,
              {
                ...breadcrumb.props,
                last: true,
              },
            );
          }

          return (
            <Fragment key={index}>
              {!isLast ? breadcrumb : lastBreadcrumb}
              {!isLast && (
                <span className="ocean-breadcrumb-separator">{separator}</span>
              )}
            </Fragment>
          );
        })}
      </BreadcrumbWrapper>
    </BreadcrumbContext.Provider>
  );
};

export default Breadcrumb;
