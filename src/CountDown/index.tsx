import dayjs, { ManipulateType } from 'dayjs';
import { GlobalFontSize } from 'Ocean/common/variable';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';
import { FORMATSTRING } from '../common/constant';
import { SizeType } from '../common/type';
import { computedTime, diffHms, formatTime } from './util';

interface CountDown {
  targetTime?: string;
  onComplete?: () => void;
  size?: SizeType;
}

dayjs.locale('zh-cn');
const CountDownWrapper = styled.div<{ fontSize: string }>`
  display: flex;
  overflow: hidden;
  font-size: ${(props) => {
    return props.fontSize;
  }};

  /* @keyframes up {
    0% {
      transform: translateY(20px);
    }

    100% {
      transform: translateY(0);
    }
  }
  .ocean-second {
    animation: up 1000ms ease infinite;
  } */
`;

const CountDown = (props: CountDown) => {
  const { targetTime, onComplete, size = 'medium' } = props;
  const nowTime = dayjs().format(FORMATSTRING);

  const [, forceUpdate] = useState(false);
  const isComplete = useRef(false);

  const dimension = useMemo(() => {
    let fontSize = GlobalFontSize.medium;
    if (size === 'small') fontSize = GlobalFontSize.small;
    else if (size === 'large') fontSize = GlobalFontSize.large;
    return fontSize;
  }, [size]);

  function startComputed() {
    const [hour, minute, second] = computedTime(
      diffHms(formatTime(nowTime), formatTime(targetTime!)),
    );
    return [hour, minute, second];
  }

  const [hour, minute, second] = startComputed();

  useEffect(() => {
    setInterval(() => {
      !isComplete.current && forceUpdate((pre) => !pre);
    }, 1000);
  }, []);

  useEffect(() => {
    if (hour === '00' && minute === '00' && second === '00') {
      setTimeout(() => {
        onComplete?.();
        isComplete.current = true;
      }, 10);
    }
  }, [hour, minute, second]);

  return (
    <CountDownWrapper fontSize={dimension}>
      <div className="ocean-hour">{hour}</div>
      <div>:</div>
      <div className="ocean-minute">{minute}</div>
      <div>:</div>
      <div className="ocean-second">{second}</div>
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
      size={props.size}
      targetTime={dayjs().add(count, unit).format(FORMATSTRING)}
    />
  );
};

export default CountDown;
