import { ButtonType } from '@cyan-ocean/ui/Button';
import { SizeType } from '@cyan-ocean/ui/common/type';
import { ocean } from '@cyan-ocean/ui/System';
import React, { CSSProperties, Fragment } from 'react';
import { DirectionType } from '../common/type';
import { OceanComponent, StyleProps } from '../System/system.type';
import { RadioProvider } from './context';

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
  exam?: boolean;
  solid?: boolean;
}
export interface RadioGroupProps extends OceanComponent<'div', RadioGroup> {}

const RadioGroup = (props: RadioGroupProps) => {
  const {
    children,
    mode = 'vertical',
    exam = true,
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
        exam,
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
