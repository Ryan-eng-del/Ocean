import { GlobalColor } from 'Ocean/common/variable';
import React, { ReactNode, useContext } from 'react';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import SelectContext from './context';

interface Option {
  children?: ReactNode;
  value: any;
}

const OptionWrapper = styled.div<{
  __css: FlattenSimpleInterpolation | undefined;
}>`
  padding: 8px;
  cursor: pointer;
  font-size: 13px;
  ${(props) => props.__css}
`;

const Option = (props: Option) => {
  const { children, value } = props;

  const selectContext = useContext(SelectContext);

  let curStyle = css`
    background-color: ${GlobalColor.OceanPrimaryColor};
    color: #fff;
  `;

  return (
    <OptionWrapper
      onClick={() => {
        selectContext?.setSelectValue?.((draft) => {
          draft.value = value;
          draft.curValue = value;
        });
      }}
      __css={
        selectContext?.selectValue?.curValue === value ? curStyle : undefined
      }
      onMouseMove={() =>
        selectContext?.setSelectValue?.((draft) => {
          draft.curValue = value;
        })
      }
    >
      <div>{children}</div>
    </OptionWrapper>
  );
};

export default Option;
