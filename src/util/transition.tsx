export const opacityTransition = (className: string) => {
  return `
.${className}-enter,
.${className}-appear {
  opacity: 0;
}

.${className}-enter-active,
.${className}-appear-active {
  opacity: 1;
  transition: opacity 330ms linear;
}

.${className}-exit {
  opacity: 1;
}

.${className}-exit-active {
  opacity: 0;
  transition: opacity 330ms linear;
}


.${className}-exit-done {
  opacity: 0;
}
`;
};
