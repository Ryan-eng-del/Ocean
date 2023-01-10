import { GlobalColor, TypeButtonColor } from 'Ocean/common/variable';
import React, { ReactNode } from 'react';
import styled from 'styled-components';
import ButtonBase from '../Button/ButtonBase';
import { GlobalFontSize, GlobalRadioSize } from '../common/variable';
import { useRadioContext } from '../RadioGroup/RadioContext';

interface Radio {
  value: React.Key;
  className?: string;
  disable?: boolean;
  children: ReactNode;
  curSelect?: React.Key[];
}

type RadioWrapper = {
  isSelect: boolean;
  size: { size: string; fontSize: string };
  isText: boolean;
  isDanger: boolean;
};

export const RadioWrapper = styled.div<RadioWrapper>`
  ${(props) => ({
    width: `${props.size.size}`,
    height: `${props.size.size}`,
    lineHeight: `${props.size.size}`,
  })};

  border-radius: 50%;
  text-align: center;

  overflow: hidden;

  cursor: pointer;
  margin-bottom: 14px;

  border: ${`1.5px solid ${GlobalColor.OceanBorderLightColor}`};

  & button {
    border: none;
    font-size: ${(props) => props.size.fontSize};
    padding: 0;
    border-radius: 50%;
    background-color: ${(props) => {
      let re;
      re =
        props.isText && props.isSelect
          ? GlobalColor.OceanHoverLight
          : undefined;
      if (re) return re;
      re =
        props.isDanger && props.isSelect
          ? TypeButtonColor.ganderColor
          : undefined;
      return re;
    }};

    &:hover {
      background-color: ${(props) => {
        let re;
        re =
          props.isText && props.isSelect
            ? GlobalColor.OceanHoverLight
            : undefined;
        if (re) return re;
        re = props.isDanger ? TypeButtonColor.ganderColor : undefined;
        return re;
      }};

      color: ${(props) => {
        return props.isDanger ? GlobalColor.OceanRedColor : undefined;
      }};
    }
  }
`;

const Radio = (props: Radio) => {
  const RadioContext = useRadioContext();

  const getIsSelect = (value: any) => {
    const radioValue = RadioContext?.value;
    if (Array.isArray(radioValue)) {
      return radioValue.includes(value);
    } else {
      return props.value === radioValue;
    }
  };

  const isSelect = getIsSelect(props.value);

  const isText = RadioContext?.type === 'text';

  const isDanger = RadioContext?.type === 'danger';

  const computedSize = (size = 'medium'): [string, string] => {
    let dimension = '35px';
    let fontSize = GlobalFontSize.medium;
    if (size === 'large') {
      dimension = GlobalRadioSize.large;
      fontSize = GlobalFontSize.large;
    } else if (size === 'small') {
      dimension = GlobalRadioSize.small;
      fontSize = GlobalFontSize.small;
    }
    return [dimension, fontSize];
  };

  const [size, fontSize] = computedSize(RadioContext?.size);

  const radioClick = (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    value: any,
  ) => {
    const contextValue = RadioContext?.value;
    const curValue = Array.isArray(contextValue)
      ? contextValue
      : [contextValue];
    RadioContext?.onChange(e, value, curValue.concat(value));
  };

  return (
    <>
      <RadioWrapper
        isSelect={isSelect}
        onClick={(e) => radioClick(e, props.value)}
        size={{ size: size, fontSize: fontSize }}
        isText={isText}
        isDanger={isDanger}
      >
        <ButtonBase
          type={isSelect ? RadioContext?.type || 'primary' : 'outline'}
          height={size}
          animationColor={isDanger ? TypeButtonColor.dangerRippleColor : ''}
        >
          {props.children}
        </ButtonBase>
      </RadioWrapper>
    </>
  );
};

export default Radio;
