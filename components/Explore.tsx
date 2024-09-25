import Image from 'next/image';

const Explore = () => {
  return (
    <section className="py-12 xl:h-[90vh] xl:w-screen xl:py-0">
      <div className="container mx-auto flex xl:size-full xl:items-center xl:justify-center">
        <div className="flex w-full flex-col gap-12 lg:flex-row xl:gap-20">
          <div className="mx-auto flex max-w-[400px] flex-1 flex-col items-end justify-around gap-12 text-center xl:mx-0 xl:max-w-none xl:gap-0 xl:text-left">
            {/* item 1 */}
            <div className="relative flex w-full items-start justify-center xl:justify-end">
              <div className="xl:flex xl:max-w-[420px] xl:flex-col xl:items-end xl:text-right">
                <div className="mb-6 flex items-center justify-center">
                  <Image
                    src="/assets/explore/icons/coffee-1.svg"
                    width={56}
                    height={56}
                    alt=""
                  />
                </div>
                <h3 className="mb-4 font-primary text-3xl font-bold xl:text-4xl">
                  {`Men's Cut`}
                  <span className="ml-2 text-xs">メンズカット</span>
                </h3>
                <p className="max-w-[400px]">
                  ¥1,700 ※眉毛・耳毛カット付き
                  <br />
                  ※平日シニア割引（65歳以上）¥1,500
                </p>
              </div>
            </div>
            {/* item 2 */}
            <div className="relative flex w-full items-start justify-center xl:justify-end">
              <div className="xl:flex xl:max-w-[420px] xl:flex-col xl:items-end xl:text-right">
                <div className="mb-6 flex items-center justify-center">
                  <Image
                    src="/assets/explore/icons/coffee-2.svg"
                    width={56}
                    height={56}
                    alt=""
                  />
                </div>
                <h3 className="mb-4 font-primary text-3xl font-bold xl:text-4xl">
                  Fade cut/Skin fade
                  <span className="ml-2 text-xs">フェード・スキンフェード</span>
                </h3>
                <p className="max-w-[400px]">
                  <p>※フェード(0.3ミリ〜) +¥500</p>
                  <p>※スキンフェード(0ミリ〜) +¥1,000</p>
                </p>
              </div>
            </div>
          </div>

          {/* image */}
          <div className="hidden justify-center xl:flex">
            <div className="relative h-[580px] w-[322px]">
              <Image
                src="/assets/explore/cut_only.png"
                fill
                alt=""
                className="object-cover"
                quality={100}
                priority
                data-scroll
                data-scroll-speed="0.1"
              />
            </div>
          </div>

          <div className="mx-auto flex max-w-[400px] flex-1 flex-col justify-around gap-12 text-center xl:mx-0 xl:max-w-none xl:gap-0 xl:text-left">
            {/* item 3 */}
            <div className="relative flex w-full items-start justify-center xl:justify-start">
              <div className="xl:flex xl:max-w-[420px] xl:flex-col xl:items-start xl:text-left">
                <div className="mb-6 flex items-center justify-center">
                  <Image
                    src="/assets/explore/icons/coffee-3.svg"
                    width={56}
                    height={56}
                    alt=""
                  />
                </div>
                <h3 className="mb-4 font-primary text-3xl font-bold xl:text-4xl">
                  Circular cut
                  <span className="ml-2 text-xs">丸刈り</span>
                </h3>
                <p className="max-w-[400px]">¥1,500 ※シニア割引不可</p>
              </div>
            </div>
            {/* item 4 */}
            <div className="relative flex w-full items-start justify-center xl:justify-start">
              <div className="xl:flex xl:max-w-[420px] xl:flex-col xl:items-start xl:text-left">
                <div className="mb-6 flex items-center justify-center">
                  <Image
                    src="/assets/explore/icons/coffee-4.svg"
                    width={56}
                    height={56}
                    alt=""
                  />
                </div>
                <h3 className="mb-4 font-primary text-3xl font-bold xl:text-4xl">
                  {`Women's Cut`}
                  <span className="ml-2 text-xs">レディース</span>
                </h3>
                <p className="max-w-[400px]">
                  <p>¥2,000</p>
                  <p>※平日の15時まで受付可</p>
                  <p>※平日の15時以降土日・祝は男性のみ施術となります</p>
                  <p>予めご了承ください</p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
