import { FC, memo, useState } from "react";

import classes from "./Desktop1.module.css";
import { Ellipse7Icon } from "./Ellipse7Icon";
import { Menu } from "./Menu";
import { Header } from "./Header";
import { NewTrending } from "./NewTrending";
import { GameList } from "./GameList";

interface Props {
  className?: string;
  classes?: {
    ellipse7?: string;
  };
}
export const Desktop1: FC<Props> = memo(function Desktop1(props = {}) {
  const [searchText, setSearchText] = useState<string>("");
  return (
    <div className={`${classes.root} ${props.className || ""}`}>
      <GameList searchText={searchText} />
      <NewTrending onSearchTextChange={(text) => setSearchText(text)} />
      <Ellipse7Icon
        className={`${classes.ellipse7} ${props.classes?.ellipse7 || ""}`}
      />
      <Header />
      <Menu />
    </div>
  );
});
