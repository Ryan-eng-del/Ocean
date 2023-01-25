import dayjs, { ManipulateType } from 'dayjs';
import { GlobalFontSize } from 'Ocean/common/variable';
import React, { ReactNode, useEffect, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';
import { FORMATSTRING } from '../common/constant';
import { SizeType } from '../common/type';
import { computedTime, diffHms, formatTime } from './util';

interface CountDown {
  targetTime?: string;
  onComplete?: () => void;
  size?: SizeType;
  separator?: ReactNode;
  animationTime?: string;
}

dayjs.locale('zh-cn');
const CountDownWrapper = styled.div<{ fontSize: string; height: string }>`
  display: flex;
  height: ${(props) => props.height};
  position: relative;
  font-size: ${(props) => props.fontSize};
  overflow: hidden;
  /* @keyframes up {
    0% {
      transform: translateY(0);
    }

    100% {
      transform: translateY(-30px);
    }
  }

  & div[class$='origin'] {
    animation: 1s up infinite 1s;
  }

  & div[class$='copy'] {
    animation: 1s up infinite 1s;
  } */
`;

const CountDown = (props: CountDown) => {
  const { targetTime, onComplete, size = 'medium', separator } = props;

  const nowTime = dayjs().format(FORMATSTRING);

  const [, forceUpdate] = useState(false);
  const isComplete = useRef(false);

  const dimension = useMemo(() => {
    let fontSize = GlobalFontSize.medium;
    if (size === 'small') fontSize = GlobalFontSize.small;
    else if (size === 'large') fontSize = GlobalFontSize.large;
    return fontSize;
  }, [size]);

  const computedHeight = useMemo(() => {
    let height = '27px';
    if (size === 'large') height = '27px';
    else if (size === 'small') height = '27px';
    return height;
  }, [size]);

  function startComputed() {
    const [hour, minute, second] = computedTime(
      diffHms(formatTime(nowTime), formatTime(targetTime!)),
    );
    return [hour, minute, second];
  }

  // toDo Animation 补充，新的时间向上顶 旧的时间
  const secondRef = useRef(null);
  const [hour, minute, second] = startComputed();

  useEffect(() => {
    // 每隔一秒刷新页面
    let timer = setInterval(() => {
      !isComplete.current && forceUpdate((pre) => !pre);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // 倒计时结束之后，调用回调函数，计时器是为了，先使得 UI 更新
    if (hour === '00' && minute === '00' && second === '00') {
      setTimeout(() => {
        onComplete?.();
        isComplete.current = true;
      }, 10);
    }
  }, [hour, minute, second]);

  const OceanSeparator = (
    <div className="ocean-separator" style={{ padding: '0 3px' }}>
      {separator || ':'}
    </div>
  );

  return (
    <CountDownWrapper
      fontSize={dimension}
      height={computedHeight}
      className="ocean-countdown-wrapper"
    >
      <div className="ocean-hour-wrapper">
        <div className="ocean-hour-origin">{hour}</div>
      </div>

      {OceanSeparator}

      <div className="ocean-minute-wrapper">
        <div className="ocean-minute-origin">{minute}</div>
      </div>

      {OceanSeparator}

      <div className="ocean-second-wrapper" ref={secondRef}>
        <div className="ocean-second-origin">{second}</div>
      </div>
    </CountDownWrapper>
  );
};

CountDown.setAdd = function (
  count: number,
  unit: ManipulateType,
  props: CountDown,
) {
  return (
    <CountDown
      {...props}
      targetTime={dayjs().add(count, unit).format(FORMATSTRING)}
    />
  );
};

export default CountDown;
