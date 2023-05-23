
import { Button } from '@mui/material';
import style from './Login.module.scss';
import { useNavigate } from 'react-router-dom';
import {TextField} from '@mui/material';



export const Login = () => {

    const nevigate = useNavigate();
    const clickHandler = () => {
        nevigate("/manager")
      }

  return (


<form>
<TextField
  style={{ width: "250px", margin: "5px" }}
  type="text"
  label="password"
  variant="outlined"
/>
<br />
<TextField
  style={{ width: "250px", margin: "5px" }}
  type="email"
  label="email"
  variant="outlined"
/>
<br />
<Button onClick={clickHandler} variant="contained" color="primary">
  Login
</Button>
</form>
  )
}
