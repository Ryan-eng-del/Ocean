import { CheckOutlined } from '@ant-design/icons';
import { isNoPass } from 'Ocean/util/common';
import React, {
  CSSProperties,
  ReactNode,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { SizeType } from '../common/type';
import { GlobalRadioSize } from '../common/variable';
import {
  IconWrapper,
  StepContent,
  StepIcon,
  StepLine,
  StepsWrapper,
  StepWrapper,
} from './style';

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
