export type DOMElements = keyof JSX.IntrinsicElements;

export type OceanHTMLComponent = {
  [T in DOMElements]: any;
};
