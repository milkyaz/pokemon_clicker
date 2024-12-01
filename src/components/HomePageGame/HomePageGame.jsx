import {
  Container,
  Typography,
  Paper,
  Box,
  Button,
  CardMedia,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Card,
  CardContent,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { data } from "../data/data";
import "./index.css";
export const HomePageGame = () => {
  const IMAGES = {
    image1: new URL("./img/home-page-logo.png", import.meta.url).href,
    image2: new URL("./img/home-page-logo-2.png", import.meta.url).href,
    image3: new URL("./img/money-logo.png", import.meta.url).href,
    image4: new URL("./img/My-Pokemons-logo.png", import.meta.url).href,
  };

  const myPokemons = (
    <Box
      className="flex-box"
      sx={{
        display: "flex",
        gap: "10px",
        flexWrap: "wrap",
        p: "16px",
      }}
    >
      {data.map((el) => (
        <Box
          sx={{ boxShadow: 4, width: "165px", borderRadius: "16px" }}
          key={el.id}
        >
          <CardContent
            sx={{
              p: "16px",
              "&:last-child": {
                pb: "16px",
              },
            }}
          >
            <Typography variant="h6">{el.name} </Typography>
            <CardMedia
              sx={{ width: "141px", height: "141px" }}
              component="img"
              image={el.img}
              alt={el.name}
            />
            <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <Typography
                sx={{ fontSize: "16px", fontWeight: "bold" }}
                variant="p"
              >
                <span style={{ marginRight: "67px" }}>Вес</span> {el.weight}{" "}
              </Typography>
              <Typography
                sx={{ fontSize: "16px", fontWeight: "bold" }}
                variant="p"
              >
                <span style={{ marginRight: "35px" }}>Денек/сек</span>{" "}
                {el.ratio}
              </Typography>
            </Box>
          </CardContent>
        </Box>
      ))}
    </Box>
  );
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
          <Box className="my__pokemons">
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <CardMedia
                  sx={{
                    width: "170px",
                    height: "35px",
                  }}
                  component="img"
                  image={IMAGES.image4}
                  alt="Logo"
                />
              </AccordionSummary>
              <AccordionDetails>
                <Card sx={{ boxShadow: 4 }}>{myPokemons}</Card>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Box>
        <Box className="footer"></Box>
      </Container>
    </>
  );
};
