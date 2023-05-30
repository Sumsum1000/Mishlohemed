import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Welcome } from "../../Components/Welcome/Welcome";
import { AmutaManager } from "../../Components/AmutaManager/AmutaManager";
import { Login } from "../login/Login";
import { Register } from "../Register/Register";
import { CreateAmuta } from "../../Components/CreateAmuta/CreateAmuta";
import { Button, createTheme, ThemeProvider } from "@mui/material";
import { green, cyan, lime, grey, red, yellow } from "@mui/material/colors";
import styled from "@emotion/styled";
import { Amuta } from "../../Components/Amuta/Amuta";

export const BasicButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(5),
  backgroundColor: theme.palette.primary.main,
}));

const theme = createTheme({
  palette: {
    primary: {
      main: cyan[200],
    },
    secondary: {
      main: lime[200],
    },
  },
  spacing: [0, 2, 4, 8, 16, 18],

  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "90vw",
          height: "80vh",
          gap: "10px",
          p: 1,
          m: 1,
          borderRadius: 1,
          //backgroundColor: red[100],
          marginTop: "5vh",
          // margin: "0 auto",
        },
      },
    },

    MuiFilledInput: {
      styleOverrides: {
        root: {
          width: "100%",
          padding: 4,
          margin: 6,
          textAlign: "right",
        },
      },
    },

    MuiBox: {
      styleOverrides: {
        root: {
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "red",
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          padding: ({ theme }) => theme.spacing(5),
          marginTop: 5,
          backgroundColor: ({ theme }) => theme.palette.primary.main,
          width: "100%", // Add this line for fullWidth effect
        },
      },
    },
  },
});

export const Routing = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/manager" element={<AmutaManager />} />
          <Route path="/createAmuta" element={<CreateAmuta />} />
          <Route path="/amuta" element={<Amuta />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};
