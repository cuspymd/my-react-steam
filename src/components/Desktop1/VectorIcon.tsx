import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 17 10' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M15.333 2 8.667 8.667 2 2'
      stroke='#fff'
      strokeWidth={2.667}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
