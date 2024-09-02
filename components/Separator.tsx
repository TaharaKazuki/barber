import Image from 'next/image';

const Separator = () => {
  return (
    <div className="relative mx-auto h-[40px] w-[300px] overflow-hidden">
      <Image
        className="object-cover"
        src={'/assets/separator.svg'}
        fill
        alt="separator"
      />
    </div>
  );
};

export default Separator;
