import { ButtonType } from 'Ocean/Button';
import { SizeType } from 'Ocean/common/type';
import React, { CSSProperties, ReactNode } from 'react';
import styled from 'styled-components';
import { DirectionType } from '../common/type';
import RadioContext from './RadioContext';

interface RadioGroup {
  children: ReactNode[] | ReactNode;
  value: any;
  onChange: (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    value: any,
    cur: any | any[],
  ) => void;
  size?: SizeType;
  mode?: DirectionType;
  type?: ButtonType;
  style?: CSSProperties;
  noExam?: boolean;
  solid?: boolean;
}

const RadioGroupWrapper = styled.div<{ mode: DirectionType }>`
  display: ${(props) => (props.mode === 'horizontal' ? 'flex' : undefined)};
`;

const RadioGroup = (props: RadioGroup) => {
  const {
    children,
    mode = 'vertical',
    noExam = false,
    size,
    type,
    value,
    solid,
  } = props;

  //toDO 统一导出接口类型
  const onChange = (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    value: any,
    cur: any | any[],
  ) => {
    props.onChange(value, e, cur);
  };
  return (
    <RadioContext.Provider
      value={{
        value,
        onChange,
        size,
        type,
        noExam,
        solid,
      }}
    >
      <>
        {[children].map((radio, i) => {
          return (
            <RadioGroupWrapper key={i} mode={mode} style={props.style}>
              {radio}
            </RadioGroupWrapper>
          );
        })}
      </>
    </RadioContext.Provider>
  );
};

export default RadioGroup;
