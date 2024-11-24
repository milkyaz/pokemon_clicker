import {
  Container,
  Typography,
  Paper,
  Box,
  Button,
  CardMedia,
} from "@mui/material";
const IMAGES = {
  image1: new URL("./img/headerLogo.png", import.meta.url).href,
  image2: new URL("./img/hd-logo1.png", import.meta.url).href,
};

function InputMain() {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          width: "400px",
          height: "388px",
        }}
      >
        <Box
          className="header__input"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <CardMedia
            sx={{
              width: "328px",
              height: "54px",
            }}
            component="img"
            image={IMAGES.image1}
            alt="Paella  dish"
          />
        </Box>
      </Box>
    </Container>
  );
}

export default InputMain;
