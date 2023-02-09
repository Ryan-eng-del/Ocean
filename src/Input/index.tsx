import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { GlobalColor, GlobalFontSize } from 'Ocean/common/variable';

import React, {
  CSSProperties,
  forwardRef,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';

import { PxType, SizeType } from '../common/type';
import { isNoPass } from '../util/common';
export interface Input {
  placeholder?: string;
  onChange?: (value: string, e: React.ChangeEvent<HTMLInputElement>) => void;
  size?: SizeType;
  style?: CSSProperties;
  onBlur?: (
    value: string,
    e: React.FocusEvent<HTMLInputElement, Element>,
  ) => void;
  showClear?: boolean;
  clearCallback?: () => void;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  type?: React.HTMLInputTypeAttribute;
  value?: any;
  defaultValue?: any;
  variant?: 'unstyle' | 'outline' | 'underline';
  width?: PxType;
  autoFocus?: boolean;
  onKeyup?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const InputStyled = styled.input<{
  height: string;
  variant: 'unstyle' | 'outline' | 'underline';
}>`
  border: ${(props) =>
    props.variant === 'unstyle'
      ? 'none'
      : `1px solid ${GlobalColor.OceanDisableGrey}`};

  border-radius: 2px;
  outline: none;
  padding-left: 10px;
  height: ${(props) => props.height};
  transition: ease 330ms;
  width: 100%;
  border-color: ${(props) =>
    props.variant === 'underline'
      ? `transparent transparent ${GlobalColor.OceanDisableGrey} transparent`
      : undefined};

  &:focus-visible {
    border-color: ${(props) =>
      props.variant === 'unstyle' ? 'none' : GlobalColor.OceanPrimaryColor};

    box-shadow: ${(props) =>
        props.variant === 'unstyle' || props.variant === 'underline'
          ? 'none'
          : GlobalColor.OceanPrimaryColor}
      0px 0px 0px 1px;

    border-color: ${(props) =>
      props.variant === 'underline'
        ? `transparent transparent ${GlobalColor.OceanPrimaryColor} transparent`
        : undefined};
  }

  &:hover {
    border-color: ${GlobalColor.OceanPrimaryColor};
    border-color: ${(props) =>
      props.variant === 'underline'
        ? `transparent transparent ${GlobalColor.OceanPrimaryColor} transparent`
        : undefined};
  }
`;

const InputWrapper = styled.div<{
  isLeftIcon: boolean;
  isRightIcon: boolean;
  __css: any;
}>`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${(props) => props.__css}

  .ocean-clear-svg {
    right: ${(props) => (props.isRightIcon ? '40px' : '5px')};
  }

  .ocean-input {
    padding-left: ${(props) => (props.isLeftIcon ? '35px' : '10px')};
    padding-right: ${(props) => (props.isRightIcon ? '35px' : '0')};
  }
`;

const ClearSvg = styled.span`
  position: absolute;
  top: 11px;
  right: 5px;
  color: ${GlobalColor.OceanDisableGrey};
  cursor: pointer;
`;

const LeftIconWrapper = styled.div`
  position: absolute;
  left: 5px;
  top: 5px;
  font-size: ${GlobalFontSize.large};
  color: ${GlobalColor.OceanDisableGrey};
`;

const RightIconWrapper = styled.div`
  position: absolute;
  right: 5px;
  top: 5px;
  font-size: ${GlobalFontSize.large};
  color: ${GlobalColor.OceanDisableGrey};
`;

const RightToolWrapper = styled.div``;

const Input = forwardRef((props: Input, ref) => {
  const {
    placeholder,
    onChange,
    size = 'large',
    style,
    onBlur,
    showClear,
    clearCallback,
    leftIcon,
    rightIcon,
    type = 'text',
    value,
    defaultValue,
    variant = 'outline',
    width = '100%',
    onKeyup,
    autoFocus = false,
    onClick,
  } = props;

  const [inputValue, setInputValue] = useState(value ?? defaultValue ?? '');
  const inputRef = useRef<null | HTMLInputElement>(null);
  const isLeftIcon = !isNoPass(leftIcon);
  const isRightIcon = !isNoPass(rightIcon);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  useEffect(() => {
    autoFocus && inputRef.current?.focus();
  }, []);

  // ============ event ===================
  const blur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    onBlur?.(e.target.value, e);
  };

  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isNoPass(value)) {
      setInputValue(e.target.value);
    }
    onChange?.(e.target.value, e);
  };

  const keyup = (e: React.KeyboardEvent<HTMLInputElement>) => {
    onKeyup?.(e);
  };

  const click = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    onClick?.(e);
  };

  // ================= style ===============
  const baseCSS = css`
    width: ${width};
  `;

  const dimensions = (): string => {
    let value = '35px';
    if (size === 'small') {
      value = '22px';
    } else if (size === 'medium') {
      value = '30px';
    }
    return value;
  };

  return (
    <InputWrapper
      isLeftIcon={isLeftIcon}
      isRightIcon={isRightIcon}
      onClick={(e) => click(e)}
      ref={ref as any}
      __css={baseCSS}
    >
      {leftIcon && <LeftIconWrapper>{leftIcon}</LeftIconWrapper>}
      <InputStyled
        ref={inputRef}
        variant={variant}
        className="ocean-input"
        placeholder={placeholder ?? 'please input!'}
        value={inputValue}
        onChange={(e) => change(e)}
        height={dimensions()}
        style={style}
        onBlur={(e) => blur(e)}
        type={type}
        onKeyUp={(e) => keyup(e)}
      />
      {
        <RightToolWrapper>
          {showClear && (
            <ClearSvg
              className="ocean-clear-svg"
              onClick={(e) => {
                e.stopPropagation();
                setInputValue('');
                clearCallback && clearCallback();
              }}
            >
              <svg
                viewBox="64 64 896 896"
                focusable="false"
                data-icon="close-circle"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z" />
              </svg>
            </ClearSvg>
          )}

          {isRightIcon && <RightIconWrapper>{rightIcon}</RightIconWrapper>}
        </RightToolWrapper>
      }
    </InputWrapper>
  );
});

export default Input;
