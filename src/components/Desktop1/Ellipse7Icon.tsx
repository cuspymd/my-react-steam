import { memo, SVGProps } from 'react';

const Ellipse7Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 867 346' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <ellipse cx={433.5} cy={173} rx={433.5} ry={173} fill='#4D6E95' />
  </svg>
);

const Memo = memo(Ellipse7Icon);
export { Memo as Ellipse7Icon };
