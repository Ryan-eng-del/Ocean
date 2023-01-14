export const animationStyle = `
  .fadeModal-enter,
  .fadeModal-appear {
    opacity: 0;
  }

  .fadeModal-enter-active,
  .fadeModal-appear-active {
    opacity: 1;
    transition: opacity 330ms;
  }

  .fadeModal-exit {
    opacity: 1;
  }

  .fadeModal-exit-active {
    opacity: 0;
    transition: opacity 330ms;
  }

  .fadeContent-enter,
  .fadeContent-appear {
    opacity: 0;
  }

  .fadeContent-enter-active,
  .fadeContent-appear-active {
    opacity: 1;
    transition: opacity 330ms;
  }

  .fadeContent-exit {
    opacity: 1;
  }

  .fadeContent-exit-active {
    opacity: 0;
    transition: opacity 330ms;
  }
`;
