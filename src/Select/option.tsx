import { ocean } from 'Ocean/System';
import { OceanComponent } from 'Ocean/System/system.type';
import React from 'react';

interface Option {}
interface OptionProps extends OceanComponent<'option', Option> {}

const Option = (props: OptionProps) => {
  return <ocean.option {...props} />;
};

export default Option;
