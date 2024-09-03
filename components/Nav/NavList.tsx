import Link from 'next/link';

const LINKS = [
  { href: '/', name: 'Home', sub: 'ホーム' },
  { href: '/', name: 'About', sub: '当店について' },
  { href: '/', name: 'Menu', sub: 'メニュー' },
  { href: '/', name: 'Questions', sub: 'よくあるご質問' },
  { href: '/', name: 'Reserve', sub: 'ご予約について' },
];

const NavList = () => {
  return (
    <ul className="flex flex-col items-center gap-8 font-primary text-4xl font-semibold text-accent uppercase">
      {LINKS.map((link, i) => (
        <Link
          href={link.href}
          key={i}
          className="flex items-baseline gap-2 overflow-hidden transition-all duration-300 hover:text-white"
        >
          {link.name}
          <span className="text-xs">{link.sub}</span>
        </Link>
      ))}
    </ul>
  );
};

export default NavList;
