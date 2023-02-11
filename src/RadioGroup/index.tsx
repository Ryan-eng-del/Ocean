import { ButtonType } from 'Ocean/Button';
import { SizeType } from 'Ocean/common/type';
import { ocean } from 'Ocean/System';
import React, { CSSProperties, Fragment } from 'react';
import { DirectionType } from '../common/type';
import { OceanComponent, StyleProps } from '../System/system.type';
import { RadioProvider } from './RadioContext';

interface RadioGroup {
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
interface RadioGroupProps extends OceanComponent<'div', RadioGroup> {}

const RadioGroup = (props: RadioGroupProps) => {
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

  const baseStyle: StyleProps = {
    display: mode === 'horizontal' ? 'flex' : undefined,
  };

  return (
    <RadioProvider
      value={{
        value,
        onChange,
        size,
        type,
        noExam,
        solid,
      }}
    >
      <ocean.div __css={baseStyle}>
        <>
          {[children].map((radio, i) => {
            return <Fragment key={i}>{radio}</Fragment>;
          })}
        </>
      </ocean.div>
    </RadioProvider>
  );
};

export default RadioGroup;
