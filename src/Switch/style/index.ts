import { SwitchType } from '@cyan-ocean/ui/common/type';
import styled from '@emotion/styled';
import { dot, getBackground, rightSwitch, track } from '../theme';

const customDotBackground = 'rgb(0, 30, 60)';

export const SwitchContainer = styled.div<{
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
        : rightSwitch().dotRightSwitchNone[props.size]};
  }

  .ocean-switch-context {
    left: ${(props) => (props.switchStatus ? '4px' : '21px')};
  }
`;

export const DotWrapper = styled.div`
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

export const SwitchDot = styled.div<{ size: 'small' | 'large' | 'medium' }>`
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

export const OceanSwitchContext = styled.div`
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
