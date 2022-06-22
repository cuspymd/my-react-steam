import { FC, memo } from 'react';

import classes from './App.module.css';
import { Desktop1 } from './components/Desktop1/Desktop1';

interface Props {
  className?: string;
}
export const App: FC<Props> = memo(function App(props = {}) {
  return (
    <div className={`${classes.root} ${props.className || ''}`}>
      <Desktop1 />
    </div>
  );
});
