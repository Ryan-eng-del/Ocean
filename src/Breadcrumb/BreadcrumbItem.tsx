import React, { forwardRef, ReactNode, useContext } from 'react';
import { OceanComponent } from '../System/system.type';
import { handlePx } from '../util/common';
import BreadcrumbContext from './breadcrumbContext';
import {
  BreadcrumbItemContent,
  BreadcrumbItemWrapper,
} from './style/breadItem';

interface BreadcrumbItem {
  children: ReactNode;
  icon?: ReactNode;
  last?: boolean;
}

interface BreadcrumbItemProps extends OceanComponent<'div', BreadcrumbItem> {}

const BreadcrumbItem = forwardRef<any, BreadcrumbItemProps>((props, ref) => {
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
      ref={ref}
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
});

export default BreadcrumbItem;
