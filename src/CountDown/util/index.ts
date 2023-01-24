export const formatTime = (time: string): number[] => {
  return time
    .split(' ')[1]
    .split(':')
    .map((_) => parseInt(_));
};

export const diffHms = (now: number[], target: number[]) => {
  return target.reduce((pre, cur, index) => {
    pre.push(cur - now[index]);
    return pre;
  }, [] as number[]);
};

export const computedTime = (diffHms: number[]) => {
  const s = diffHms[diffHms.length - 1];
  const m = diffHms[diffHms.length - 2];

  if (s < 0) {
    diffHms[diffHms.length - 1] = s + 60;
    diffHms[diffHms.length - 2] -= 1;
  }

  if (m < 0) {
    diffHms[diffHms.length - 2] = m + 60;
    diffHms[diffHms.length - 3] -= 1;
  }

  return [...diffHms].map((_) => {
    if (_ < 10) {
      return '0' + _;
    }
    return _ + '';
  });
};
