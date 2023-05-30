import { Card, CardMedia, Paper, Typography } from "@mui/material";
import style from "./ItemsDisplay.module.scss";
import React from "react";

export const ItemsDisplay = ({ title, src1, src2, src3 }) => {
  return (
    <div className={style["itemdisplay-container"]}>
      <Typography variant="h5">שלום ארז</Typography>
      <Typography variant="h4">{title}</Typography>
      <div className={style["items-container"]}>
        <img className={style["item"]} src={src1} />
        <img className={style["item"]} src={src2} />
        <img className={style["item"]} src={src3} />
      </div>
    </div>
  );
};
