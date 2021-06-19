export const pageAnimation = {
  hidden: {
    opacity: 0.5,
    y: 200,
    scale: 0.5,
    transition: {
      duration: 1,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    y: 300,
    scale: 0.5,
    transition: {
      duration: 0.5,
    },
  },
};
