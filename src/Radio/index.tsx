import { TypeButtonColor } from 'Ocean/common/variable';
import React, { forwardRef, ReactNode } from 'react';
import ButtonBase from '../Button/ButtonBase';
import { ButtonType } from '../Button/index';
import { GlobalFontSize, GlobalRadioSize } from '../common/variable';
import { useRadioContext } from './context';
import { RadioContainer, RadioContentWrapper, RadioWrapper } from './style';

interface Radio {
  value: React.Key;
  className?: string;
  disable?: boolean;
  children: ReactNode;
  curSelect?: React.Key[];
}

//toDo switch 暂不整合新架构，因为 switch 本身提供的功能比较单一，后续有 issue 可以考虑重构
const Radio = forwardRef<any, Radio>((props, ref) => {
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
  const isSolid = RadioContext?.solid === false ? false : true;

  const isDanger = RadioContext?.type === 'danger';
  const isNoExam = !RadioContext?.exam;

  const computedSize = (size = 'medium'): [string, string] => {
    let dimension = '35px';
    let fontSize = GlobalFontSize.medium;
    if (size === 'large') {
      dimension = GlobalRadioSize.large;
      fontSize = GlobalFontSize.large;
    } else if (size === 'small' || isNoExam) {
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

  const getRadioType = (): ButtonType => {
    let type;
    type = isSelect && isSolid ? RadioContext?.type || 'primary' : 'text';
    return type as ButtonType;
  };

  return (
    <RadioContainer className="ocean-radio-container" ref={ref}>
      <RadioWrapper
        isSelect={isSelect}
        onClick={(e) => radioClick(e, props.value)}
        size={{ size: size, fontSize: fontSize }}
        isText={isText}
        isDanger={isDanger}
        isSolid={isSolid}
        className="ocean-radio-wrapper"
      >
        <ButtonBase
          className="ocean-button-base"
          type={getRadioType()}
          height={size}
          width={size}
          animationColor={isDanger ? TypeButtonColor.dangerRippleColor : ''}
        >
          {!isNoExam && props.children}
        </ButtonBase>
      </RadioWrapper>

      {isNoExam && (
        <RadioContentWrapper className="ocean-radio-content-wrapper">
          {props.children}
        </RadioContentWrapper>
      )}
    </RadioContainer>
  );
});

export default Radio;
