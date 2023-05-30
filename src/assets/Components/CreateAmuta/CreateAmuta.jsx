//import style from "./CreateAmuta.module.scss";
//import React from "react";
import { Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const CreateAmuta = () => {
  const nevigate = useNavigate();
  const clickHandler = () => {
    nevigate("/amuta");
  };

  return (
    <Container>
      <div>
        <Typography variant="h4">טופס יצירת עמותה חדשה</Typography>
        <br />
        <Typography variant="h5">הכנס שם עמותה</Typography>
        <Typography variant="h5">הכנס לוגו עמותה</Typography>
        <Typography variant="h5">הכנס תאור עמותה</Typography>
      </div>

      <Button
        onClick={clickHandler}
        variant="contained"
        size="large"
        sx={{ padding: 5 }}
      >
        צור עמותה
      </Button>
    </Container>
  );
};
