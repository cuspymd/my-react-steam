import { FC, memo } from "react";

import classes from "./GameList.module.css";
import { Eosiconsloading1Icon } from "./Eosiconsloading1Icon";
import { FrameIcon } from "./FrameIcon";
import { GameFrame } from "./GameFrame";
import { Game } from "../../interfaces/Game";

interface Props {}

const games: Game[] = [
  {
    id: 0,
    link: "",
    image: "assets/image7.png",
    title: "Shadow Warrior 3",
    price: 119.0,
    tags: ["Action", "FPS", "Adventure", "Shooter"],
    platforms: ["Windows"],
    genre: ""
  },
  {
    id: 1,
    link: "",
    image: "assets/image72.png",
    title: "Barton Lynch Pro Surfing 2022",
    price: 65.0,
    tags: ["Sport", "Action", "Simulation", "Physics"],
    platforms: ["Windows"],
    genre: ""
  },
  {
    id: 2,
    link: "",
    image: "assets/image73.png",
    title: "THE KING OF FIGHTERS XV",
    price: 59.99,
    tags: ["Action", "2D Fighter", "PvP", "Fighting"],
    platforms: ["Windows"],
    genre: ""
  },
  {
    id: 3,
    link: "",
    image: "assets/image74.png",
    title: "ELDEN RING",
    price: 59.99,
    tags: ["Souls-like", "Relaxing", "Dark Fantasy", "RPG"],
    platforms: ["Windows"],
    genre: ""
  },
  {
    id: 4,
    link: "",
    image: "assets/image75.png",
    title: "Ghostwire: Tokyo",
    price: 59.99,
    tags: ["Singleplayer", "Supernatural", "First-Person", "Action Adventure"],
    platforms: ["Windows"],
    genre: ""
  }
];

export const GameList: FC<Props> = memo(function GameList(props = {}) {
  return (
    <div className={`${classes.frame20}`}>
      {games.map((game) => (
        <GameFrame game={game} />
      ))}
      <Eosiconsloading1Icon className={`${classes.eosIconsLoading1}`} />
    </div>
  );
});
