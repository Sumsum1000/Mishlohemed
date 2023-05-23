import style from './Welcome.module.scss'
import { Button } from '@mui/material'
import {useNavigate} from 'react-router-dom'


export const Welcome = () => {

  const nevigate = useNavigate();
  const loginHandler = () => {
    nevigate("/login")
  }

  const registerHandler = () => {
    nevigate("/register")
  }

  return (
    <div className={style['selcome-container']}>
      <h3>Welcome</h3>
      <p>Lets create new association</p>
      <Button onClick={loginHandler} variant='contained'>Login</Button>
      <Button onClick={registerHandler} variant='contained'>Register</Button>
    </div>
  )
}
