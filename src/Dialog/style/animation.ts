export const markDrawerAnimation = `
.mark-drawer-enter {
  opacity: 0;
}

.mark-drawer-enter-active {
  opacity: 1;
  transition: opacity 100ms linear;
}

.mark-drawer-exit {
  opacity: 1;
}

.mark-drawer-exit-active {
  opacity: 0;
  transition: opacity 100ms linear;
}


.mark-drawer-exit-done {
  opacity: 0;
}
`;

export const drawerBodyAnimation = `
  .fadedrawer-right-content-enter,
  .fadedrawer-right-content-appear {
    transform: translateX(100%);
  }

  .fadedrawer-right-content-enter-active,
  .fadedrawer-right-content-appear-active {
    transform: translateX(0);
    transition: transform 330ms;
  }

  .fadedrawer-right-content-exit {
    transform: translateX(0);
  }

  .fadedrawer-right-content-exit-active {
    transform: translateX(100%);
    transition: transform 330ms;
  }

  .fadedrawer-left-content-enter,
  .fadedrawer-left-content-appear {
    transform: translateX(-100%);
  }

  .fadedrawer-left-content-enter-active,
  .fadedrawer-left-content-appear-active {
    transform: translateX(0);
    transition: transform 330ms;
  }

  .fadedrawer-left-content-exit {
    transform: translateX(0);
  }

  .fadedrawer-left-content-exit-active {
    transform: translateX(-100%);
    transition: transform 330ms;
  }

  .fadedrawer-top-content-enter,
  .fadedrawer-top-content-appear {
    transform: translateY(-100%);
  }

  .fadedrawer-top-content-enter-active,
  .fadedrawer-top-content-appear-active {
    transform: translateY(0);
    transition: transform 330ms;
  }

  .fadedrawer-top-content-exit {
    transform: translateY(0);
  }

  .fadedrawer-top-content-exit-active {
    transform: translateY(-100%);
    transition: transform 330ms;
  }

  .fadedrawer-bottom-content-enter,
  .fadedrawer-bottom-content-appear {
    transform: translateY(100%);
  }

  .fadedrawer-bottom-content-enter-active,
  .fadedrawer-bottom-content-appear-active {
    transform: translateY(0);
    transition: transform 330ms;
  }

  .fadedrawer-bottom-content-exit {
    transform: translateY(0);
  }

  .fadedrawer-bottom-content-exit-active {
    transform: translateY(100%);
    transition: transform 330ms;
  }
`;
