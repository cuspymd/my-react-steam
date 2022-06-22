import { FC, memo } from "react";

import classes from "./Menu.module.css";
import { Entypoinstall1Icon } from "./Entypoinstall1Icon";
import { Rectangle12Icon } from "./Rectangle12Icon";

interface Props {
  className?: string;
  classes?: {
    menu?: string;
    sTAEM?: string;
    group19?: string;
    rectangle12?: string;
    install?: string;
    entypoInstall1?: string;
  };
}
export const Menu: FC<Props> = memo(function Menu(props = {}) {
  return (
    <div className={`${classes.menu} ${props.classes?.menu || ""}`}>
      <div className={`${classes.sTAEM} ${props.classes?.sTAEM || ""}`}>
        STAEM
      </div>
      <div className={`${classes.group19} ${props.classes?.group19 || ""}`}>
        <Rectangle12Icon
          className={`${classes.rectangle12} ${
            props.classes?.rectangle12 || ""
          }`}
        />
        <div className={`${classes.install} ${props.classes?.install || ""}`}>
          Install
        </div>
        <Entypoinstall1Icon
          className={`${classes.entypoInstall1} ${
            props.classes?.entypoInstall1 || ""
          }`}
        />
      </div>
    </div>
  );
});
