import { CheckOutlined } from '@ant-design/icons';
import {
  GlobalColor,
  GlobalFontSize,
  GlobalMargin,
} from 'Ocean/common/variable';
import { isNoPass } from 'Ocean/util/common';
import React, {
  CSSProperties,
  ReactNode,
  useEffect,
  useMemo,
  useState,
} from 'react';
import styled from 'styled-components';
import { SizeType } from '../common/type';
import { GlobalRadioSize } from '../common/variable';

interface Steps {
  data: Step[];
  size?: SizeType;
  current: number;
  lineStyle?: CSSProperties;
  onComplete?: () => void;
  onChange?: (index: number) => void;
}

interface Step {
  title: ReactNode;
  subTitle?: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
}
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
    back = GlobalColor.OceanDisableGrey;
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
    back = GlobalColor.OceanFontGrey;
  }
  return back;
};

const StepWrapper = styled.div<StepWrapper>`
  display: flex;
  /* flex-direction: column; */
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
        : GlobalColor.OceanDisableGrey};
    transition: 330ms ease;
  }

  .ocean-step-content {
    color: ${(props) =>
      props.isComplete || props.isGoing ? '#000' : GlobalColor.OceanFontGrey};
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
        : GlobalColor.OceanFontGrey};

    font-size: ${GlobalFontSize.lgg};
  }
`;

const StepIcon = styled.div`
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

const StepContent = styled.div`
  margin: 0 ${GlobalMargin.ms};
`;

const StepsWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
`;

const StepLine = styled.div`
  width: 200px;
  height: 2px;
  background-color: black;
  margin: 0 ${GlobalMargin.ms};
`;

const IconWrapper = styled.div`
  color: ${GlobalColor.OceanPrimaryColor};
  font-size: ${GlobalFontSize.large};
`;

const Steps = (props: Steps) => {
  const {
    data,
    current,
    size = 'medium',
    lineStyle,
    onComplete,
    onChange,
  } = props;

  const [curIndex, setCurIndex] = useState(current);

  const iconSize = useMemo(() => {
    let size = GlobalRadioSize.medium;
    if (size === 'small') size = GlobalRadioSize.small;
    else if (size === 'large') size = GlobalRadioSize.large;
    return size;
  }, [size]);

  useEffect(() => {
    setCurIndex(current);

    if (curIndex === data.length) {
      setTimeout(() => {
        onComplete?.();
      }, 10);
    }
  }, [current]);

  const clickStep = (index: number) => {
    if (!isNoPass(onChange)) {
      setCurIndex(index);
      onChange(index);
    }
  };

  return (
    <StepsWrapper>
      {data.map((step, index) => {
        const isLast = index === data.length - 1;
        const isComplete = curIndex > index + 1;
        const isGoing = curIndex === index + 1;

        const { title, subTitle, icon, description } = step;

        return (
          <StepWrapper
            onClick={() => clickStep(index + 1)}
            key={index}
            isLast={isLast}
            dimension={iconSize}
            isComplete={isComplete}
            isGoing={isGoing}
          >
            {icon ? (
              <IconWrapper className="ocean-icon-wrapper">{icon}</IconWrapper>
            ) : (
              <StepIcon className="ocean-step-icon">
                {isComplete ? <CheckOutlined /> : index + 1}
              </StepIcon>
            )}
            <StepContent className="ocean-step-content">
              <div> {title}</div>
              <div> {subTitle}</div>
              <div className="ocean-step-desc"> {description}</div>
            </StepContent>

            {!isLast && (
              <StepLine
                style={lineStyle}
                className="ocean-step-line"
              ></StepLine>
            )}
          </StepWrapper>
        );
      })}
    </StepsWrapper>
  );
};

export default Steps;
