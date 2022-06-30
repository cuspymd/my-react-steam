import { FC, memo, useState, ChangeEvent } from "react";

import classes from "./NewTrending.module.css";
import { VectorIcon } from "./VectorIcon";
import { getGames } from "../../clients/supabaseClient";

interface Props {
  className?: string;
  classes?: {
    newTrending?: string;
    rectangle8?: string;
    newTrending2?: string;
    rectangle9?: string;
    rectangle11?: string;
    search?: string;
    rectangle112?: string;
    price?: string;
    majesticonsChevronDownLine1?: string;
    sortBy?: string;
    vector?: string;
  };
  onSearchTextChange?(text: string): void;
}
export const NewTrending: FC<Props> = memo(function NewTrending(props = {}) {
  const searchGame = (event: ChangeEvent<HTMLInputElement>) => {
    if (props.onSearchTextChange) {
      props.onSearchTextChange(event.target.value);
    }
  };

  return (
    <div className={`${classes.newTrending}`}>
      <div className={`${classes.rectangle8}`}></div>
      <div className={`${classes.newTrending2}`}>New &amp; Trending</div>
      <div className={`${classes.rectangle9}`}></div>
      <div className={`${classes.rectangle11}`}></div>
      <input
        type="text"
        className={`${classes.search}`}
        onChange={searchGame}
      />
      <div className={`${classes.rectangle112}`}></div>
      <div className={`${classes.price}`}>Price</div>
      <div className={`${classes.majesticonsChevronDownLine1}`}></div>
      <div className={`${classes.sortBy}`}>Sort by:</div>
      <VectorIcon className={`${classes.vector}`} />
    </div>
  );
});
