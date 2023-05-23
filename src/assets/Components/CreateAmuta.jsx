import { Link } from 'react-router-dom';
import style from './CreateAmuta.module.scss';
import React from 'react'
import { Button } from '@mui/material';
import {useNavigate} from 'react-router-dom'


export const CreateAmuta = () => {
  
    const nevigate = useNavigate();
    const clickHandler = () => {
        nevigate('/manager')
    }

  return (
    <div>
        {/* <Link to={'/AMUTA'}> */}
        <p>form</p>
             <h1>CreateAmuta</h1>
        {/* </Link> */}
        <Button onClick={clickHandler} variant='contained'>Lets start</Button>
    </div>
  )
}
