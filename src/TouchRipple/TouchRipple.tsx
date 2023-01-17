import React, {
  ForwardedRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';
import { ButtonType } from '../Button';
import { Ripple } from './Ripple';

export type TouchRippleRef = { startRipple: (event: any) => void };
type params = { rippleSize: number; rippleX: number; rippleY: number };

interface TouchRipple {
  type?: ButtonType;
  animationColor?: string;
}

const TouchRipple = React.forwardRef(function (
  props: TouchRipple,
  ref: ForwardedRef<TouchRippleRef>,
) {
  const [ripples, setRipples] = useState<React.ReactNode[]>([]);
  const [start, setStart] = useState(false);
  const startCommit = useCallback(
    (params: params) => {
      const { rippleSize, rippleX, rippleY } = params;
      setRipples((oldRipples) => {
        return [
          ...oldRipples,
          <Ripple
            key={Math.random() * 100}
            rippleSize={rippleSize}
            rippleX={rippleX}
            rippleY={rippleY}
            type={props.type || 'primary'}
            animationColor={props.animationColor}
          />,
        ];
      });
    },
    [ripples],
  );

  const useTimer = () => {
    let timer: any = null;
    useEffect(() => {
      if (start) {
        timer = setTimeout(() => {
          setRipples([]);
        }, 1500);
      }
      return () => timer && clearTimeout(timer);
    });
  };

  useTimer();

  const startRipple = (event: any) => {
    let rippleX;
    let rippleY;
    let rippleSize;
    const element = event.target;
    // 获得点击点的位置
    // https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRect
    setStart(true);
    const rect = element?.getBoundingClientRect();
    const { clientX, clientY } = event;
    rippleX = Math.round(clientX - rect.left);
    rippleY = Math.round(clientY - rect.top);

    const sizeX =
      Math.max(Math.abs(element.clientWidth - rippleX), rippleX) * 2 + 2;
    const sizeY =
      Math.max(Math.abs(element.clientHeight - rippleY), rippleY) * 2 + 2;

    rippleSize = Math.sqrt(sizeX ** 2 + sizeY ** 2);
    startCommit({ rippleSize, rippleX, rippleY });
  };

  useImperativeHandle(ref, () => ({
    startRipple,
  }));

  return <>{ripples.map((RippleItem) => RippleItem)}</>;
});

export default TouchRipple;
