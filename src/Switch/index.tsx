import React, { CSSProperties, ReactNode, useEffect, useState } from 'react';
import { SwitchType } from '../common/type';
import {
  DotWrapper,
  OceanSwitchContext,
  SwitchContainer,
  SwitchDot,
} from './style';

interface Switch {
  checkedChildren?: ReactNode;
  unCheckedChildren?: ReactNode;
  style?: CSSProperties;
  onToggle?: (value: any) => void;
  defaultChecked?: boolean;
  type?: SwitchType;
  checkedIcon?: ReactNode;
  unCheckedIcon?: ReactNode;
  checked?: boolean;
  size?: 'small' | 'large' | 'medium';
}

//toDo switch 暂不整合新架构，因为 switch 本身提供的功能比较单一，后续有 issue 可以考虑重构
const Switch = (props: Switch) => {
  const {
    checkedChildren,
    unCheckedChildren,
    onToggle,
    defaultChecked,
    type = 'primary',
    checkedIcon,
    unCheckedIcon,
    checked,
    style,
    size = 'medium',
  } = props;

  const [switchStatus, setSwitchStatus] = useState(checked ?? true);

  useEffect(() => {
    if (defaultChecked && checked === undefined) setSwitchStatus(true);
  }, []);

  useEffect(() => {
    if (checked !== undefined) setSwitchStatus(checked);
  }, [checked]);

  const toggleSwitch = () => {
    onToggle?.(!switchStatus);
    checked ?? setSwitchStatus(!switchStatus);
  };

  return (
    <SwitchContainer
      className="ocean-switch-container"
      onClick={toggleSwitch}
      switchStatus={switchStatus}
      type={type}
      style={style}
      size={size}
    >
      <DotWrapper className="dot-wrapper">
        <SwitchDot className="ocean-switch-dot" size={size}>
          {type === 'custom' && (
            <>
              {switchStatus
                ? checkedIcon ?? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      width="20"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill="%23fff"
                        d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"
                      />
                    </svg>
                  )
                : unCheckedIcon ?? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      width="20"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill="%23fff"
                        d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"
                      />
                    </svg>
                  )}
            </>
          )}
        </SwitchDot>
      </DotWrapper>

      {checkedChildren && unCheckedChildren && (
        <OceanSwitchContext className="ocean-switch-context">
          {switchStatus ? checkedChildren : unCheckedChildren}
        </OceanSwitchContext>
      )}
    </SwitchContainer>
  );
};

export default Switch;
