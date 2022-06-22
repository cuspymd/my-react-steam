import { FC, memo } from "react";

import classes from "./Header.module.css";
import { Group17Icon } from "./Group17Icon";

interface Props {
  className?: string;
  classes?: {
    header?: string;
    image4?: string;
    image5?: string;
    image6?: string;
    group17?: string;
  };
}
export const Header: FC<Props> = memo(function Header(props = {}) {
  return (
    <div className={`${classes.header} ${props.classes?.header || ""}`}>
      <div className={`${classes.image4} ${props.classes?.image4 || ""}`}></div>
      <div className={`${classes.image5} ${props.classes?.image5 || ""}`}></div>
      <div className={`${classes.image6} ${props.classes?.image6 || ""}`}></div>
      <Group17Icon
        className={`${classes.group17} ${props.classes?.group17 || ""}`}
      />
    </div>
  );
});
