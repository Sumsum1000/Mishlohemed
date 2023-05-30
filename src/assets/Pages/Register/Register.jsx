import { Box, Container, FilledInput } from "@mui/material";
// import style from "./Register.module.scss";
import { useNavigate } from "react-router-dom";
//import { TextField } from "@mui/material";
import { BasicButton } from "../Routing/Routing";

export const Register = () => {
  const nevigate = useNavigate();
  const clickHandler = () => {
    nevigate("/manager");
  };

  return (
    <form>
      <Container>
        <Box>
          <FilledInput type="text" placeholder="שם" variant="outlined" />
          <FilledInput type="text" placeholder="סיסמה" variant="outlined" />
          <FilledInput type="email" placeholder="מייל" variant="outlined" />
        </Box>

        <BasicButton onClick={clickHandler} variant="contained">
          צור חשבון
        </BasicButton>
      </Container>
    </form>
  );
};
