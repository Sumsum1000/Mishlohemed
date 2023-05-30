//import style from "./Welcome.module.scss";
import { Box, Button, ButtonGroup, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Welcome = () => {
  const nevigate = useNavigate();
  const loginHandler = () => {
    nevigate("/login");
  };

  const registerHandler = () => {
    nevigate("/register");
  };

  return (
    <Container>
      <Box>
        <Typography variant="h3">ברוכים הבאים</Typography>
        <Typography variant="h5" sx={{ marginBottom: "100px" }}>
          להתחבר - לתרום - לעזור
        </Typography>
      </Box>

      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          gap: "20px",
        }}
      >
        <Button
          onClick={loginHandler}
          variant="contained"
          size="large"
          sx={{ padding: 5 }}
        >
          הרשם
        </Button>
        <Button
          onClick={registerHandler}
          variant="contained"
          size="large"
          sx={{ padding: 5 }}
        >
          צור חשבון
        </Button>
      </Box>
    </Container>
  );
};

// export const Welcome = () => {
//   const nevigate = useNavigate();
//   const loginHandler = () => {
//     nevigate("/login");
//   };

//   const registerHandler = () => {
//     nevigate("/register");
//   };

//   return (
//     <Container className={style["selcome-container"]}>
//       <h3>Welcome</h3>
//       <p>Lets create new association</p>
//       <ButtonGroup>
//         <Button onClick={loginHandler} variant="contained">
//           Login
//         </Button>
//         <Button onClick={registerHandler} variant="contained">
//           Register
//         </Button>
//       </ButtonGroup>
//     </Container>
//   );
// };
