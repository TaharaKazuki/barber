import { motion } from 'framer-motion';

import NavList from './NavList';

const heightAnimation = {
  initial: {
    height: 0,
  },
  open: {
    height: '85vh',
    transition: { duration: 1, ease: [0.75, 0, 0.23, 1] },
  },
  close: {
    height: 0,
    transition: { duration: 1, ease: [0.75, 0, 0.23, 1] },
  },
};

const Nav = () => {
  return (
    <motion.div
      variants={heightAnimation}
      initial="initial"
      animate="open"
      exit="close"
      className="absolute -top-full z-50 w-full overflow-hidden bg-primary"
    >
      <div className="container mx-auto flex h-full items-center justify-center">
        <NavList />
      </div>
    </motion.div>
  );
};

export default Nav;
