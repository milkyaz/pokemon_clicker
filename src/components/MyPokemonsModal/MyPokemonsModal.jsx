import {
  Box,
  CardMedia,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PokemonsList from "../PokemonsList/PokemonsList";

export function MyPokemonsModal() {
  const IMAGES = {
    image4: new URL("./img/My-Pokemons-logo.png", import.meta.url).href,
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
    </Box>
  );
  return (
    <Box className="my__pokemons" sx={{ width: "118vh" }}>
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
  );
}
