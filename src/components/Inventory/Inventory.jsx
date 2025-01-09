import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import BerryItem from "../BerryItem/BerryItem";
import Grid from "@mui/material/Grid2";
import "./index.css";

export function Inventory() {
  // const IMAGES = {
  //   image3: new URL("./img/money-logo.png", import.meta.url).href,
  // };
  return (
    <Box
      className="inventory"
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "56vh",
        height: "86vh",
        boxShadow: "0px 1px 5px 0px rgba(0, 0, 0, 0.5)",
        mr: "20px",
        borderRadius: "16px",
        p: "16px 16px 9px 16px",
      }}
    >
      <Typography variant="h4" sx={{ fontSize: "24px" }}>
        Inventory
      </Typography>
      <BerryItem />
    </Box>
  );
}
