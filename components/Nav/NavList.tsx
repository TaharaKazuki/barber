import Link from 'next/link';
import { motion } from 'framer-motion';
import { type JSX } from 'react';

const links = [
  { href: '/', name: 'Home', sub: 'ホーム' },
  { href: '/about', name: 'About', sub: '当店について' },
  { href: '/menu', name: 'Menu', sub: 'メニュー' },
  { href: '/questions', name: 'Questions', sub: 'よくあるご質問' },
  { href: '/reserve', name: 'Reserve', sub: 'ご予約について' },
];

const letterAnim = {
  initial: {
    y: '100%',
    opacity: 0,
  },
  enter: (i: number[]) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: [0.6, 0, 0.2, 1], delay: i[0] },
  }),
  exit: (i: number[]) => ({
    y: '100%',
    opacity: 0,
    transition: { duration: 0.8, ease: [0.6, 0, 0.2, 1], delay: i[1] },
  }),
};

const getLetter = (name: string) => {
  let letters = [] as JSX.Element[];
  name.split('').forEach((letter, index) => {
    letters.push(
      <motion.span
        variants={letterAnim}
        initial="initial"
        animate="enter"
        exit="exit"
        custom={[index * 0.04, (name.length - index) * 0.01]}
        key={index}
      >
        {letter}
      </motion.span>
    );
  });
  return letters;
};

const NavList = () => {
  return (
    <ul className="flex flex-col gap-8 font-primary text-4xl font-semibold text-accent items-center uppercase">
      {links.map((link, index) => (
        <li className="flex">
          <Link
            href={link.href}
            key={index}
            className="flex items-baseline overflow-hidden xl:hover:text-white transition-all"
          >
            {getLetter(link.name)}
            <span className="ml-3 text-xs">{getLetter(link.sub)}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavList;
