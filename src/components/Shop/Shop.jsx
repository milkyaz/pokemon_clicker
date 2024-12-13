import { Box, Typography } from "@mui/material";

export function Shop() {
  return (
    <Box
      className="shop"
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "35vh",
        boxShadow: "0px 1px 5px 0px rgba(0, 0, 0, 0.5)",
        ml: "20px",
        borderRadius: "16px",
        p: "16px 16px 9px 16px",
      }}
    >
      <Typography variant="h4" sx={{ fontSize: "24px" }}>
        Shop
      </Typography>
      <Box className="shop__filters"></Box>
      <Box className="shop__items"></Box>
    </Box>
  );
}
