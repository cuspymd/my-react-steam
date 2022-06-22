import { memo, SVGProps } from 'react';

const FrameIcon4 = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 0h18.962v18.954H0V0Zm21.038 0H40v18.954H21.038V0ZM0 21.038h18.962V40H0V21.038Zm21.038 0H40V40H21.038'
      fill='#214B6B'
    />
  </svg>
);

const Memo = memo(FrameIcon4);
export { Memo as FrameIcon4 };
