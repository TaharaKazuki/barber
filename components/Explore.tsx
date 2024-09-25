import Image from 'next/image';

const Explore = () => {
  return (
    <section className="py-12 xl:h-[90vh] xl:w-screen xl:py-0">
      <div className="container mx-auto flex xl:size-full xl:items-center xl:justify-center">
        <div className="flex w-full flex-col gap-12 lg:flex-row xl:gap-20">
          <div className="mx-auto flex max-w-[400px] flex-1 flex-col items-end justify-around gap-12 text-center xl:mx-0 xl:max-w-none xl:gap-0 xl:text-left">
            {/* item 1 */}
            <div className="relative flex items-start">
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
                  Rich Espresso Blends
                </h3>
                <p className="max-w-[400px]">
                  Indulge in the deep, robust flavors of our expertly crafted
                  espresso blends. Perfect for a quick pick-me-up or a leisurely
                  afternoon treat.
                </p>
              </div>
            </div>
            {/* item 2 */}
            <div className="relative flex items-start">
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
                  Classic Drip Coffee
                </h3>
                <p className="max-w-[400px]">
                  Enjoy the comforting taste of our classic drip coffee, brewed
                  to perfection. A timeless choice for coffee enthusiasts who
                  appreciate simplicity.
                </p>
              </div>
            </div>
          </div>

          {/* image */}
          <div className="hidden justify-center xl:flex">
            <div className="relative h-[580px] w-[322px]">
              <Image
                src="/assets/explore/cup.png"
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
            <div className="relative flex items-start">
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
                  Smooth Cold Brews
                </h3>
                <p className="max-w-[400px]">
                  Refresh yourself with our smooth and invigorating cold brew
                  options. Ideal for those warm days when you need a cool,
                  caffeinated boost.
                </p>
              </div>
            </div>
            {/* item 4 */}
            <div className="relative flex items-start">
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
                  Flavorful Latte Varieties
                </h3>
                <p className="max-w-[400px]">
                  Experience the rich and creamy flavors of our diverse latte
                  selections. From vanilla to caramel, we have a latte to suit
                  every taste.
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
