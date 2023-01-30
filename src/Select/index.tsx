import { DownOutlined } from '@ant-design/icons';
import { Input } from 'Ocean';
import { offEvent, onEvent } from 'Ocean/util/dom';
import { opacityTransition } from 'Ocean/util/transition';
import React, {
  CSSProperties,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';
import { CSSTransition } from 'react-transition-group';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { useImmer } from 'use-immer';
import type { Input as InputType } from '../Input/index';
import SelectContext from './context';

interface Select extends Omit<InputType, 'onChange'> {
  children?: ReactNode;
  value?: any;
  onChange?: (
    value: any,
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => void;
  style?: CSSProperties;
}

const SelectWrapper = styled.div`
  position: relative;
  ${opacityTransition('select-option')}
`;

const OptionWrapper = styled.div<{ __css: FlattenSimpleInterpolation }>`
  background-color: #fff;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 5px -3px,
    rgb(0 0 0 / 14%) 0px 2px 10px 1px, rgb(0 0 0 / 12%) 0px 2px 9px 2px;
  position: absolute;
  z-index: 10;
  ${(props) => props.__css}
`;

const Select = (props: Select) => {
  const {
    children,
    defaultValue,
    value,
    placeholder,
    onChange,
    style,
    width,
    ...restProps
  } = props;

  const [showOption, setShowOption] = useState(false);
  const [selectValue, setSelectValue] = useImmer({
    value: value ?? defaultValue ?? placeholder,
    curValue: value ?? defaultValue ?? placeholder,
  });
  const inputRef = useRef<null | HTMLInputElement>(null);

  // =============== event ============
  const click = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    setShowOption(!showOption);
  };

  const choice = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    onChange?.(e, selectValue.value);
  };

  const documentClick = () => {
    setShowOption(false);
  };

  // ============ effect ==============
  useEffect(() => {
    showOption && onEvent(window, 'click', documentClick)();
    return () => {
      showOption && offEvent(window, 'click', documentClick)();
    };
  }, [showOption]);

  const baseStyle = css`
    top: ${(inputRef.current?.clientHeight as number) + 10}px;
    width: ${width ?? '100%'};
  `;

  return (
    <SelectContext.Provider
      value={{
        selectValue,
        setSelectValue,
      }}
    >
      <SelectWrapper style={style}>
        <Input
          width={width}
          placeholder={placeholder ?? 'please select'}
          onClick={click}
          ref={inputRef}
          defaultValue={defaultValue}
          value={selectValue.value}
          rightIcon={
            <DownOutlined
              style={{ fontSize: '13px', color: 'black', cursor: 'pointer' }}
            />
          }
          {...restProps}
        />

        <CSSTransition
          in={showOption}
          timeout={110}
          appear
          classNames={'select-option'}
          unmountOnExit
        >
          <OptionWrapper __css={baseStyle} onClick={(e) => choice(e)}>
            {children}
          </OptionWrapper>
        </CSSTransition>
      </SelectWrapper>
    </SelectContext.Provider>
  );
};

export default Select;
