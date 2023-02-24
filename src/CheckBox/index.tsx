import { Radio, RadioGroup } from '@cyan-ocean/ui';
import { RadioGroupProps } from '@cyan-ocean/ui/Radio/group';
import React, { useState } from 'react';

interface CheckOption {
  label?: any;
  value: any;
}

interface CheckBoxGroup extends Omit<RadioGroupProps, 'value'> {
  option: CheckOption | CheckOption[];
  defaultSelect?: any[];
  onChange: (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    value: any,
    cur: any | any[],
  ) => void;
}

const CheckBoxGroup = (props: CheckBoxGroup) => {
  const { option, onChange: change, defaultSelect, ...restProps } = props;
  const newOption = Array.isArray(option) ? option : [option];

  const [select, setCurSelect] = useState<any[]>(defaultSelect || []);

  const onChange = (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    k: any,
    cur: any | any[],
  ) => {
    const index = select.findIndex((k) => k === e);
    setCurSelect((draft) => {
      if (index === -1) {
        return draft.concat(e);
      } else {
        return draft.filter((d, i) => i !== index);
      }
    });
    change(e, k, cur);
  };

  return (
    <RadioGroup onChange={onChange} value={select} {...restProps}>
      {newOption.map((o) => {
        return (
          <Radio value={o.value} key={o.value}>
            {o.label || o.value}
          </Radio>
        );
      })}
    </RadioGroup>
  );
};

export default CheckBoxGroup;
