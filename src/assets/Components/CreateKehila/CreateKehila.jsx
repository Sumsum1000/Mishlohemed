import { Button, Container } from "@mui/material";

export const CreateKehila = () => {
  return (
    <Container>
      <div>
        <p>טופס יצירת קהילה</p>
      </div>
      <Button variant="contained" size="large" sx={{ padding: 5 }}>
        צור קהילה
      </Button>
    </Container>
  );
};
