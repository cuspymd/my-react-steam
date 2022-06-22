import { memo, SVGProps } from 'react';

const Group17Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 202 15' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={7.5} cy={7.5} r={7.5} fill='#fff' />
    <circle cx={82.5} cy={7.5} r={7.5} fill='#fff' fillOpacity={0.5} />
    <circle cx={45.5} cy={7.5} r={7.5} fill='#fff' fillOpacity={0.5} />
    <circle cx={119.5} cy={7.5} r={7.5} fill='#fff' fillOpacity={0.5} />
    <circle cx={194.5} cy={7.5} r={7.5} fill='#fff' fillOpacity={0.5} />
    <circle cx={157.5} cy={7.5} r={7.5} fill='#fff' fillOpacity={0.5} />
  </svg>
);

const Memo = memo(Group17Icon);
export { Memo as Group17Icon };
