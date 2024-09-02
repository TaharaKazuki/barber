import Image from 'next/image';

import { cn } from '@/lib/utils';

type BadgeProps = {
  containerStyles: string;
};

const Badge = ({ containerStyles }: BadgeProps) => {
  return (
    <div className={cn(`relative ${containerStyles}`)}>
      <Image src={'/assets/badge.svg'} fill alt="" />
    </div>
  );
};

export default Badge;
