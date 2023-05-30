import { Link } from "react-router-dom";
import style from "./CreateAmuta.module.scss";
import React from "react";
import { Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const CreateAmuta = () => {
  const nevigate = useNavigate();
  const clickHandler = () => {
    nevigate("/manager");
  };

  return (
    <Container>
      <div>
        <p>form</p>
        <h1>CreateAmuta</h1>
      </div>
      <Button
        onClick={clickHandler}
        variant="contained"
        size="large"
        sx={{ padding: 5 }}
      >
        Lets start
      </Button>
    </Container>
  );
};
