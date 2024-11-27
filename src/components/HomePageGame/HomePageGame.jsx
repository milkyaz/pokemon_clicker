import {
  Container,
  Typography,
  Paper,
  Box,
  Button,
  CardMedia,
} from "@mui/material";
export const HomePageGame = () => {
  const IMAGES = {
    image1: new URL("./img/home-page-logo.png", import.meta.url).href,
    image2: new URL("./img/home-page-logo-2.png", import.meta.url).href,
    image3: new URL("./img/money-logo.png", import.meta.url).href,
  };
  return (
    <>
      <Container
        maxWidth="m"
        sx={{ bgcolor: "tomato", height: "100vh", padding: { xs: 0 } }}
      >
        <Paper elevetion={3}>
          <Box
            className="header"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              bgcolor: "cadetblue",
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
              <Typography variant="h5">100 000 000</Typography>
            </Box>
          </Box>
        </Paper>

        <Box className="main__content">
          <Box className="inventory">
            <Typography variant="h4">Inventory</Typography>
            <Box className="inventory-items">
              <Box className="item"></Box>
            </Box>
          </Box>
        </Box>
        <Box className="footer"></Box>
      </Container>
    </>
  );
};
