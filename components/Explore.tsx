import Image from 'next/image';

const Explore = () => {
  return (
    <section className="py-12 xl:h-[90vh] xl:w-screen xl:py-0">
      <div className="container mx-auto flex xl:size-full xl:items-center xl:justify-center">
        <div className="flex w-full flex-col gap-12 bg-yellow-200 lg:flex-row xl:gap-20">
          <div className="mx-auto flex max-w-[400px] flex-1 flex-col items-end justify-around gap-12 bg-blue-200 text-center xl:max-w-none xl:gap-0 xl:text-left">
            {/* item1 */}
            <div>item1</div>
            {/* item2 */}
            <div>item2</div>
          </div>

          <div className="hidden justify-center xl:flex">
            <div className="relative h-[580px] w-[322px]">
              <Image
                src="/assets/explore/cut_only.png"
                fill
                alt="barber neon"
                className="object-contain"
                quality={100}
                priority
              />
            </div>
          </div>
          <div className="mx-auto flex max-w-[400px] flex-1 flex-col items-end justify-around gap-12 bg-pink-200 text-center xl:max-w-none xl:gap-0 xl:text-left">
            {/* item3 */}
            <div>item3</div>
            {/* item4 */}
            <div>item4</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
