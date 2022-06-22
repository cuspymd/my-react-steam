import { memo, SVGProps } from 'react';

const Eosiconsloading1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 54 53' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      opacity={0.5}
      d='M27 4.417a22.083 22.083 0 1 0 0 44.165 22.083 22.083 0 0 0 0-44.165Zm0 39.75a17.667 17.667 0 1 1 0-35.335 17.667 17.667 0 0 1 0 35.335Z'
      fill='#fff'
    />
    <path d='M44.667 26.5h4.416A22.083 22.083 0 0 0 27 4.417v4.416A17.667 17.667 0 0 1 44.667 26.5Z' fill='#fff' />
  </svg>
);

const Memo = memo(Eosiconsloading1Icon);
export { Memo as Eosiconsloading1Icon };
