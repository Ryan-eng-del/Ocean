import React from 'react';
import Button, { BaseButtonProps, ButtonType } from '../Button/index';
import ButtonGroupContext from './ButtonGroupContext';

interface ButtonGroup extends BaseButtonProps {
  types: ButtonType;
}

const ButtonGroup = (props: ButtonGroup) => {
  const { types } = props;
  const children: React.FunctionComponentElement<any>[] = [];

  React.Children.forEach(props.children, (buttonItem: any, index) => {
    const child = React.cloneElement(<Button />, {
      ...buttonItem.props,
      type: types && types[index],
    });
    children.push(child);
  });

  return (
    <ButtonGroupContext.Provider value={props}>
      {children}
    </ButtonGroupContext.Provider>
  );
};

export default ButtonGroup;
