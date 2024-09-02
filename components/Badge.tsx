import Image from 'next/image';

import { cn } from '@/lib/utils';

type BadgeProps = {
  containerStyles: string;
};

const Badge = ({ containerStyles }: BadgeProps) => {
  return (
    <div className={cn(`relative ${containerStyles}`)}>
      <Image
        src={'/assets/badge.svg'}
        fill
        alt="store badge"
        style={{ transform: 'scale(1.5)' }} // さらに拡大したい場合
      />
    </div>
  );
};

export default Badge;
