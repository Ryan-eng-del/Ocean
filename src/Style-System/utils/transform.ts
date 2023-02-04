export const transform = {
  px: (property: string | number) => {
    return typeof property === 'number' ? `${property}px` : property;
  },
};
