export function onEvent(
  el: any,
  eventName: string,
  handler: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void,
  options?: boolean,
) {
  return function () {
    el && el.addEventListener(eventName, handler, options || false);
  };
}

export function offEvent(
  el: any,
  eventName: string,
  handler: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void,
  options?: boolean,
) {
  return function () {
    el && el.removeEventListener(eventName, handler, options || false);
  };
}

export function stopPropagation(e: React.MouseEvent<HTMLElement, MouseEvent>) {
  e.stopPropagation();
  return (fn: () => void) => fn();
}
