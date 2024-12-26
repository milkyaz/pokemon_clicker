import { Box, Typography, CardMedia } from "@mui/material";
import { useSelector } from "react-redux";

export default function PokemonItem() {
  const pokemon = useSelector((state) => state.pokemons.pokemon);

  if (!pokemon) return null;

  return (
    <Box className={"box__item"}>
      <Box
        sx={{
          boxShadow: "0px 1px 5px 0px rgba(0, 0, 0, 0.5)",
          borderRadius: "16px",
          p: "12px",
        }}
      >
        <Typography sx={{ fontSize: "16px", fontWeight: "bold" }} variant="p">
          {pokemon.name}
        </Typography>
        <CardMedia
          sx={{
            mr: "6px",
            width: "141px",
            height: "141px",
          }}
          component="img"
          image={pokemon.sprites.front_default}
          alt={pokemon.name}
        />
        <Box
          className="item__bottom-text"
          sx={{ display: "flex", flexDirection: "column", gap: "8px" }}
        >
          <Typography sx={{ fontSize: "16px", fontWeight: "bold" }} variant="p">
            <span style={{ marginRight: "81px" }}>Вес</span> {pokemon.weight} кг
          </Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: "bold" }} variant="p">
            <span style={{ marginRight: "67px" }}>Денек/сек</span>1
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
