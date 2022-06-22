import { FC, memo } from "react";

import classes from "./NewTrending.module.css";
import { VectorIcon } from "./VectorIcon";

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
}
export const NewTrending: FC<Props> = memo(function NewTrending(props = {}) {
  return (
    <div
      className={`${classes.newTrending} ${props.classes?.newTrending || ""}`}
    >
      <div
        className={`${classes.rectangle8} ${props.classes?.rectangle8 || ""}`}
      ></div>
      <div
        className={`${classes.newTrending2} ${
          props.classes?.newTrending2 || ""
        }`}
      >
        New &amp; Trending
      </div>
      <div
        className={`${classes.rectangle9} ${props.classes?.rectangle9 || ""}`}
      ></div>
      <div
        className={`${classes.rectangle11} ${props.classes?.rectangle11 || ""}`}
      ></div>
      <div className={`${classes.search} ${props.classes?.search || ""}`}>
        Search
      </div>
      <div
        className={`${classes.rectangle112} ${
          props.classes?.rectangle112 || ""
        }`}
      ></div>
      <div className={`${classes.price} ${props.classes?.price || ""}`}>
        Price
      </div>
      <div
        className={`${classes.majesticonsChevronDownLine1} ${
          props.classes?.majesticonsChevronDownLine1 || ""
        }`}
      ></div>
      <div className={`${classes.sortBy} ${props.classes?.sortBy || ""}`}>
        Sort by:
      </div>
      <VectorIcon
        className={`${classes.vector} ${props.classes?.vector || ""}`}
      />
    </div>
  );
});
