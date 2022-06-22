import { memo, SVGProps } from 'react';

const Rectangle12Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 153 40' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 20C0 8.954 8.954 0 20 0h113c11.046 0 20 8.954 20 20s-8.954 20-20 20H20C8.954 40 0 31.046 0 20Z'
      fill='#214B6B'
    />
  </svg>
);

const Memo = memo(Rectangle12Icon);
export { Memo as Rectangle12Icon };
