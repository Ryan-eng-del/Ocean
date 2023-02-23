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

export const heightTransition = (className: string) => {
  return `
.${className}-enter,
.${className}-appear {
  height: 0;
}

.${className}-enter-active,
.${className}-appear-active {
  height: 30px;
  transition: all 330ms linear;
}

.${className}-exit {
  height: 30px;
}

.${className}-exit-active {
  height: 0;
  transition: all 330ms linear;
}

`;
};
