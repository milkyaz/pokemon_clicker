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
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchPokemons,
  selectFilteredPokemons,
} from "../../store/pokemonsSlice";
import { data } from "../data/data";
import "./index.css";

export const HomePageGame = () => {
  const IMAGES = {
    image1: new URL("./img/home-page-logo.png", import.meta.url).href,
    image2: new URL("./img/home-page-logo-2.png", import.meta.url).href,
    image3: new URL("./img/money-logo.png", import.meta.url).href,
    image4: new URL("./img/My-Pokemons-logo.png", import.meta.url).href,
    imagePoke: new URL("./img/My-Pokemons-logo.png", import.meta.url).href,
  };
  const PokemonsList = () => {
    const dispatch = useDispatch();
    const pokemons = useSelector(selectFilteredPokemons);
    const pokemonsStatus = useSelector((state) => state.pokemons.status);
    const error = useSelector((state) => state.pokemons.error);

    useEffect(() => {
      if (pokemonsStatus === "idle") {
        dispatch(fetchPokemons());
      }
    }, [pokemonsStatus, dispatch]);

    if (pokemonsStatus === "loading") {
      return <div>Loading...</div>;
    } else if (pokemonsStatus === "succeeded") {
      return (
        <Box
          className="box__item"
          style={{ display: "flex", gap: 40, flexWrap: "wrap", marginTop: 50 }}
        >
          {pokemons.results.map((el) => (
            <Box key={el.id}>
              <CardMedia
                sx={{
                  mr: "6px",
                }}
                component="img"
                image={el.url}
                alt="Logo"
              />{" "}
              {el.name}
            </Box>
          ))}
        </Box>
      );
    } else if (pokemonsStatus === "failed") {
      return console.log(error);
    }
  };

  const [count, setCount] = useState(100000000);

  const Clicker = () => {
    return (
      <Button
        className="inventory__button"
        sx={{
          display: "flex",
          justifyContent: "center",
          border: "3px solid #365FAC",
          borderRadius: "4px",
        }}
        size="small"
        onClick={() => setCount(count - 1000)}
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
        />{" "}
        <Typography variant="p" sx={{ fontSize: "24px" }}>
          1000{" "}
        </Typography>
      </Button>
    );
  };
  const myPokemons = (
    <Box
      sx={{
        display: "flex",
        gap: "10px",
        flexWrap: "wrap",
        p: "16px",
      }}
    >
      <PokemonsList />
      {/* {data.map((el) => (
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
      ))} */}
    </Box>
  );

  return (
    <>
      <Container maxWidth="m" sx={{ height: "100vh", padding: { xs: 0 } }}>
        <Paper
          variant="outlined"
          sx={{ boxShadow: "0px 1px 5px 0px rgba(0, 0, 0, 0.5)" }}
        >
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
        </Paper>

        <Box className="main__content" sx={{ display: "flex", mt: "20px" }}>
          <Box
            className="inventory"
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "320px",
              boxShadow: "0px 1px 5px 0px rgba(0, 0, 0, 0.5)",
              mr: "20px",
              borderRadius: "16px",
              p: "16px 16px 9px 16px",
            }}
          >
            <Typography variant="h4" sx={{ fontSize: "24px" }}>
              Inventory
            </Typography>

            <Box className="inventory-items">
              <Box className="item"></Box>
            </Box>
            <Clicker />
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
              <AccordionDetails>{myPokemons}</AccordionDetails>
            </Accordion>
          </Box>
          <Box
            className="shop"
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "320px",
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
        </Box>
        <Box className="footer"></Box>
      </Container>
    </>
  );
};
