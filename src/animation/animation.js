export const pageAnimation = {
  hidden: {
    opacity: 0,
    y: 200,
    transition: {
      duration: 1,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 1,
      when: "beforeChildren",
      mass:0.8
    },
  },
  exit: {
    opacity: 0,
    y: 300,
    transition: {
      duration: 0.5,
    },
  },
};
