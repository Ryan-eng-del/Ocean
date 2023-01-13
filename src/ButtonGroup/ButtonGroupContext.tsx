import React from 'react';
import { BaseButtonProps } from '../Button/index';
interface ButtonGroupContext extends BaseButtonProps {
  temp?: any;
}

const ButtonGroupContext = React.createContext<ButtonGroupContext>({
  children: '',
  type: 'text',
});

export default ButtonGroupContext;
