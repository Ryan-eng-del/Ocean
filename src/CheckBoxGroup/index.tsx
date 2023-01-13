import { Radio, RadioGroup } from 'Ocean';
import { ButtonType } from 'Ocean/Button';
import { DirectionType, SizeType } from 'Ocean/common/type';
import React, { CSSProperties } from 'react';
import { useImmer } from 'use-immer';

interface CheckOption {
  label?: any;
  value: any;
}

interface CheckBoxGroup {
  option: CheckOption | CheckOption[];
  curSelect?: any[];
  defaultSelect?: any[];
  onChange: (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    value: any,
    cur: any | any[],
  ) => void;
  size?: SizeType;
  mode?: DirectionType;
  type?: ButtonType;
  style?: CSSProperties;
}

const CheckBoxGroup = (props: CheckBoxGroup) => {
  const { option } = props;
  const newOption = Array.isArray(option) ? option : [option];
  const [select, setCurSelect] = useImmer<any[]>(props.defaultSelect || []);

  const onChange = (e: any, k: any, cur: any | any[]) => {
    setCurSelect((draft) => {
      const index = draft.findIndex((k) => k === e);
      if (index === -1) {
        draft.push(e);
      } else {
        draft.splice(index, 1);
      }
    });

    props.onChange(e, k, cur);
  };

  return (
    <div>
      {newOption.map((o) => {
        return (
          <RadioGroup
            key={o.value}
            onChange={(k, e, cur) => onChange(k, e, cur)}
            value={select}
            type={props.type}
            size={props.size}
            mode={props.mode}
            style={props.style}
          >
            <Radio value={o.value}>{o.label || o.value}</Radio>
          </RadioGroup>
        );
      })}
    </div>
  );
};

export default CheckBoxGroup;
