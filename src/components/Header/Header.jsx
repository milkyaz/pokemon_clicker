import { Box, CardMedia, Typography } from "@mui/material";

export function Header({ count }) {
  const IMAGES = {
    image1: new URL("./img/home-page-logo.png", import.meta.url).href,
    image2: new URL("./img/home-page-logo-2.png", import.meta.url).href,
    image3: new URL("./img/money-logo.png", import.meta.url).href,
  };
  return (
    <Box
      className="header"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        borderRadius: "16px",
      }}
    >
      <Box
        className="header__logo"
        sx={{ display: "flex", p: "16px", gap: "26px" }}
      >
        <CardMedia
          sx={{
            width: "149px",
            height: "54px",
          }}
          component="img"
          image={IMAGES.image1}
          alt="Logo"
        />
        <CardMedia
          sx={{
            width: "149px",
            height: "54px",
          }}
          component="img"
          image={IMAGES.image2}
          alt="Logo"
        />
      </Box>

      <Box
        className="balance"
        sx={{ display: "flex", pt: "27px", pb: "27px", pr: "16px" }}
      >
        <CardMedia
          sx={{
            width: "32px",
            height: "32px",
            mr: "6px",
          }}
          component="img"
          image={IMAGES.image3}
          alt="Logo"
        />
        <Typography variant="h5">{count}</Typography>
      </Box>
    </Box>
  );
}
