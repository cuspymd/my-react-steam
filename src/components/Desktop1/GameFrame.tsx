import { FC, memo } from "react";

import classes from "./GameFrame.module.css";
import { FrameIcon } from "./FrameIcon";
import { Game } from "../../interfaces/Game";

interface Props {
  game: Game;
}

export const GameFrame: FC<Props> = memo(function Header(props) {
  const game: Game = props.game;

  return (
    <div className={`${classes.gameFrame}`} key={game.id}>
      <div
        className={`${classes.image}`}
        style={{ backgroundImage: `url(${game.image})` }}
      ></div>
      <div className={`${classes.gameTitle}`}>{game.title}</div>
      <div className={`${classes.gamePrice}`}>${game.price}</div>
      <div className={`${classes.gameTags}`}>{game.tags.join(", ")}</div>
      <div className={`${classes.rectangle}`}></div>
      <FrameIcon className={`${classes.frame}`} />
    </div>
  );
});
