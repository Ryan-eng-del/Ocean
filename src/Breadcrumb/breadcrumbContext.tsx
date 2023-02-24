import { createContext } from 'react';
import { PxType } from '../common/type';

interface BreadcrumbContext {
  fontSize: PxType;
  outline: boolean;
  underline: boolean;
}

const BreadcrumbContext = createContext<BreadcrumbContext>({
  fontSize: '13px',
  outline: false,
  underline: false,
});

export default BreadcrumbContext;
