import styled from '@emotion/styled';
import {
  GlobalColor,
  GlobalFontSize,
  GlobalMargin,
} from 'Ocean/common/variable';

interface StepWrapper {
  isLast: boolean;
  dimension: string;
  isGoing: boolean;
  isComplete: boolean;
}
const getIconBack = (isComplete: boolean, isGoing: boolean) => {
  let back;
  if (isGoing) {
    back = GlobalColor.OceanPrimaryColor;
  } else if (isComplete) {
    back = GlobalColor.OceanPrimaryDeepBlue;
  } else {
    back = GlobalColor.OceanStepGray;
  }
  return back;
};

const getIconColor = (isComplete: boolean, isGoing: boolean) => {
  let back;

  if (isGoing) {
    back = '#fff';
  } else if (isComplete) {
    back = GlobalColor.OceanPrimaryColor;
  } else {
    back = GlobalColor.OceanStepFontGray;
  }
  return back;
};

export const StepWrapper = styled.div<StepWrapper>`
  display: flex;
  align-items: center;
  margin-right: ${(props) => (!props.isLast ? GlobalMargin.ms : undefined)};
  transition: 330ms ease;

  .ocean-step-icon {
    width: ${(props) => props.dimension};
    height: ${(props) => props.dimension};
    background-color: ${(props) =>
      getIconBack(props.isComplete, props.isGoing)};

    color: ${(props) => getIconColor(props.isComplete, props.isGoing)};
  }

  .ocean-step-line {
    background-color: ${(props) =>
      props.isComplete
        ? GlobalColor.OceanPrimaryColor
        : GlobalColor.OceanStepGray};
    transition: 330ms ease;
  }

  .ocean-step-content {
    color: ${(props) =>
      props.isComplete || props.isGoing
        ? '#000'
        : GlobalColor.OceanStepFontGray};
    transition: 330ms ease;

    .ocean-step-desc {
      font-size: 13px;
      margin-top: ${GlobalMargin.xs};
    }
  }
  .ocean-icon-wrapper {
    color: ${(props) =>
      props.isComplete || props.isGoing
        ? GlobalColor.OceanPrimaryColor
        : 'rgba(0,0,0,.25)'};

    font-size: ${GlobalFontSize.lgg};
  }
`;

export const StepIcon = styled.div`
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

export const StepContent = styled.div`
  margin: 0 ${GlobalMargin.ms};
`;

export const StepsWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
`;

export const StepLine = styled.div`
  width: 200px;
  height: 2px;
  background-color: black;
  margin: 0 ${GlobalMargin.ms};
`;

export const IconWrapper = styled.div`
  color: ${GlobalColor.OceanPrimaryColor};
  font-size: ${GlobalFontSize.large};
`;
