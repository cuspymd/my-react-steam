import { FC, memo, useEffect, useState } from "react";

import classes from "./GameList.module.css";
import { Eosiconsloading1Icon } from "./Eosiconsloading1Icon";
import { GameFrame } from "./GameFrame";
import { Game } from "../../interfaces/Game";
import { getGames } from "../../clients/supabaseClient";

interface Props {
  searchText?: string;
}

export const GameList: FC<Props> = memo(function GameList(props = {}) {
  const [games, setGames] = useState<Game[]>([]);
  useEffect(() => {
    getGames(props.searchText).then((_games) => {
      console.log(_games);
      setGames(_games);
    });
  }, [props.searchText]);

  return (
    <div className={`${classes.frame20}`}>
      {games.map((game) => (
        <GameFrame game={game} key={game.id} />
      ))}
      <Eosiconsloading1Icon className={`${classes.eosIconsLoading1}`} />
    </div>
  );
});
