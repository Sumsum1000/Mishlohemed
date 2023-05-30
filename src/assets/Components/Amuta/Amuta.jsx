import { Container, Typography, Button } from "@mui/material";

export const Amuta = () => {
  return (
    <Container>
      <div>
        <Typography variant="h5">שם</Typography>
        <Typography variant="h5">לוגו</Typography>
        <Typography variant="h5">תאור</Typography>
        <br />
        <Typography variant="h5">קהילות קיימות</Typography>
        <Typography variant="h5">יצירת קהילה חדשה</Typography>
      </div>

      <Button
        //onClick={clickHandler}
        variant="contained"
        size="large"
        sx={{ padding: 5 }}
      >
        צור עמותה
      </Button>
    </Container>
  );
};
