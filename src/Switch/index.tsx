import styled from '@emotion/styled';
import React, { CSSProperties, ReactNode, useEffect, useState } from 'react';
import { SwitchType } from '../common/type';
import { dot, getBackground, rightSwitch, track } from './theme';

const customDotBackground = 'rgb(0, 30, 60)';

const SwitchContainer = styled.div<{
  switchStatus: boolean;
  type: SwitchType;
  size: 'small' | 'large' | 'medium';
}>`
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  line-height: ${(props) => track().height[props.size]};
  vertical-align: middle;
  border: none;
  border-radius: 12px;
  transition: 110ms linear;
  min-width: ${(props) => track().minWidth[props.size]};
  height: ${(props) => track().height[props.size]};
  background: ${(props) => getBackground(props.type, props.switchStatus)};
  cursor: pointer;
  opacity: 1;

  .ocean-switch-dot {
    background: ${(props) =>
      props.type === 'custom' ? customDotBackground : '#fff'};
  }

  .dot-wrapper {
    width: ${(props) => dot().sizeDotWrapper[props.size]};
    height: ${(props) => dot().sizeDotWrapper[props.size]};
    right: ${(props) =>
      props.switchStatus
        ? rightSwitch().dotRightSwitch[props.size]
        : rightSwitch().dotRightSwitch[props.size]};
  }

  .ocean-switch-context {
    left: ${(props) => (props.switchStatus ? '4px' : '21px')};
  }
`;

const DotWrapper = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  top: -13px;
  transition: 110ms linear;
  border-radius: 50%;
  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }
`;

const SwitchDot = styled.div<{ size: 'small' | 'large' | 'medium' }>`
  border-radius: 50%;
  left: 50%;
  position: relative;
  transition: 110ms linear;
  top: 50%;
  text-align: center;
  transform: translate(-50%, -50%);
  width: ${(props) => dot().sizeDot[props.size]};
  height: ${(props) => dot().sizeDot[props.size]};
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px,
    rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;

  & svg {
    fill: white;
  }
`;

const OceanSwitchContext = styled.div`
  position: absolute;
  color: #fff;
  top: 0;
  transition: 110ms linear;
  font-size: 12px;
  line-height: 24px;
  text-align: center;
  width: 24px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

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
