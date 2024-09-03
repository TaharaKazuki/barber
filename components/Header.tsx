'use client';

import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="absolute inset-x-0 top-[40px] z-[60]">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link
            href={'/'}
            className="relative z-[60] h-[40px] w-[100px] xl:h-[70px] xl:w-[200px]"
          >
            <Image
              src="/assets/logo.svg"
              fill
              alt="logo"
              className="object-cover"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
