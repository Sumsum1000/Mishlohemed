import { Card, CardMedia, Paper } from '@mui/material';
import style from './ItemsDisplay.module.scss';
import React from 'react'

export const ItemsDisplay = ({title, src1, src2, src3}) => {
    return (
        <div className={style['itemdisplay-container']}>
            <h3>{title}</h3>
            <div className={style['items-container']}>
                <img className={style['item']} src={src1}/>
                <img className={style['item']} src={src2}/>
                <img className={style['item']} src={src3}/>
            </div>
        </div>
    )
}
