import { motion, Variant } from 'framer-motion';
import React from 'react';
import { usePopoverContext } from './createContext';

const motionVariants: Record<string, Variant> = {
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.1,
      ease: [0.4, 0, 1, 1],
    },
  },
  enter: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.15,
      ease: [0, 0, 0.2, 1],
    },
  },
};

const PopoverTransition = (props: any) => {
  const popoverProps = usePopoverContext();

  return (
    <motion.section
      variants={motionVariants}
      initial={false}
      style={{
        width: '330px',
      }}
      animate={popoverProps.open ? 'enter' : 'exit'}
    >
      {props.children}
    </motion.section>
  );
};
export default PopoverTransition;
