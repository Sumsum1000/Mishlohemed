
import { Button } from '@mui/material';
import style from './Register.module.scss';
import { useNavigate } from 'react-router-dom';
import {TextField} from '@mui/material';



export const Register = () => {

    const nevigate = useNavigate();
    const clickHandler = () => {
        nevigate("/createAmuta")
        console.log('fgredhrtgh')
      }

  return (


<form>
<TextField
  style={{ width: "250px", margin: "5px" }}
  type="text"
  label="Name"
  variant="outlined"
/>
<br />
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
{/* <p>Choose logo</p>
<TextField
  style={{ width: "250px", margin: "5px" }}
  type="file"
  variant="outlined"
/>
<br /> */}
<Button onClick={clickHandler} variant="contained" color="primary">
  Register
</Button>
</form>
  )
}
