'use client';

import Badge from './Badge';
import Separator from './Separator';

const Hero = () => {
  return (
    <section className="relative h-[80vh] text-white xl:h-screen">
      {/* overlay */}
      <div className="absolute z-10 size-full bg-primary/[0.93] bg-hero_overlay" />
      {/* video */}
      <video
        autoPlay
        loop
        muted
        className="absolute left-0 top-0 size-full object-cover"
      >
        <source src="/assets/hero/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* HP Name */}
      <div className="container relative z-30 mx-auto flex h-full flex-col items-center xl:flex-row">
        <div
          data-scroll
          data-scroll-speed="0.4"
          className="flex h-full flex-1 flex-col items-center justify-center gap-10 text-center xl:pb-12"
        >
          {/* badge */}
          <div className="flex flex-col items-center">
            <Badge containerStyles="hidden xl:flex xl:w-[350px] xl:h-[280px]" />
            <h1 className="h1 text-white">
              <span className="text-accent">Cut Only</span> Barber&apos;s
            </h1>
          </div>

          {/* separator */}
          <Separator />
          <p className="lead mb-4 max-w-[300px] text-xs font-light md:max-w-[430px] xl:max-w-[560px] xl:text-base">
            格好よくなりたい・悩みを解決したい・ 仕事終わりに切りたい等、
            <br />
            様々なお客様の要望の1つ1つにお応えし最高の接遇を心がけております。
          </p>
          <button className="btn text-base">
            Reserve <span className="text-xs underline">ご予約はこちら</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
