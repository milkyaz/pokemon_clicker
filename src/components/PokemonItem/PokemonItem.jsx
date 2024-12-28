
import { useState, useCallback, memo } from "react";
import { Box, Typography, CardMedia, Modal, Button } from "@mui/material";
import { useSelector } from "react-redux";

// Стили вынесены отдельно
const styles = {
  modalStyle: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  },
  cardBox: {
    boxShadow: "0px 1px 5px 0px rgba(0, 0, 0, 0.5)",
    borderRadius: "16px",
    p: "12px",
  },
  cardMedia: {
    mr: "6px",
    width: "141px",
    height: "141px",
  },
  bottomText: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  typography: {
    fontSize: "16px",
    fontWeight: "bold",
  },
};

// Мемоизированный компонент модального окна
const PokemonModal = memo(({ secondValue }) => {
  const pokemon = useSelector((state) => state.pokemons.pokemon);
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styles.modalStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {pokemon.name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Weight: {pokemon.weight} кг
            <br />
            Денек/сек: {secondValue}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
});

// Мемоизированный основной компонент
const PokemonItem = memo(({ secondValue }) => {
  const pokemon = useSelector((state) => state.pokemons.pokemon);

  if (!pokemon) return null;

  return (
    <Box className={"box__item"}>
      <Box sx={styles.cardBox}>
        <Typography sx={styles.typography} variant="p">
          {pokemon.name}
        </Typography>
        <CardMedia
          sx={styles.cardMedia}
          component="img"
          image={pokemon.sprites.front_default}
          alt={pokemon.name}
        />
        <PokemonModal pokemon={pokemon} secondValue={secondValue} />
        <Box className="item__bottom-text" sx={styles.bottomText}>
          <Typography sx={styles.typography} variant="p">
            <span style={{ marginRight: "81px" }}>Вес</span> {pokemon.weight} кг
          </Typography>
          <Typography sx={styles.typography} variant="p">
            <span style={{ marginRight: "67px" }}>Денек/сек</span>
            {secondValue}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
});

// Добавляем displayName для лучшей отладки
PokemonModal.displayName = "PokemonModal";
PokemonItem.displayName = "PokemonItem";

export default PokemonItem;
