import React from "react";
import style from "./AmutaManager.module.scss";
import { ItemsDisplay } from "../ItemsDisplay/ItemsDisplay";
import { Button, Container, Typography } from "@mui/material";
import logo1 from "../../Graphics/DemoLogo.jpg";
import { BasicButton } from "../../Pages/Routing/Routing";

export const AmutaManager = () => {
  return (
    <Container>
      {/* <div>
        <h1>LOGO</h1>
        <Typography variant="h4">מי אנחנו?</Typography>

        <Typography variant="h6">
          caregiver מספק לרוב טיפול סיעודי מורכב, תמיכה רגשית וקוגניטיבית,
          וניהול הטיפול בבית ומחוצה לו. תפקידו מוביל לתחושות חיוביות, אולם גם
          לנטל משפחתי, בריאותי, נפשי, תעסוקתי וכלכלי מורכב.
        </Typography>
      </div> */}

      <ItemsDisplay
        title={"העמותות שלך"}
        src1={logo1}
        src2={logo1}
        src3={logo1}
      />
      {/* <ItemsDisplay title={"קהילות"} src1={logo1} src2={logo1} src3={logo1} /> */}
      {/* <Button variant="contained" size="large" sx={{ padding: 5 }}>
        צור עמותה חדשה
      </Button> */}
      <BasicButton variant="contained">צור עמותה חדשה</BasicButton>
    </Container>
  );
};
