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
        className="object-cover"
      />
    </div>
  );
};

export default Badge;
