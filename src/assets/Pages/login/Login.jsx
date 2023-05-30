import { Box, Button, Container, FilledInput } from "@mui/material";
import style from "./Login.module.scss";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import { BasicButton } from "../Routing/Routing";

export const Login = () => {
  const nevigate = useNavigate();
  const clickHandler = () => {
    nevigate("/manager");
  };

  return (
    <form>
      <Container>
        <Box>
          <FilledInput type="text" placeholder="סיסמה" variant="outlined" />
          <FilledInput type="email" placeholder="מייל" />
        </Box>

        <BasicButton onClick={clickHandler} variant="contained">
          הרשם
        </BasicButton>
      </Container>
    </form>
  );
};
