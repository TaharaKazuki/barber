'use client';

import { useEffect } from 'react';

// components
import Hero from '@/components/Hero';
import Explore from '@/components/Explore';

const Home = () => {
  useEffect(() => {
    const loadLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      new LocomotiveScroll();
    };

    loadLocomotiveScroll();
  }, []);

  return (
    <div className="h-full overflow-x-hidden">
      <Hero />
      <Explore />
      <div className="h-[4000px]"></div>
    </div>
  );
};

export default Home;
