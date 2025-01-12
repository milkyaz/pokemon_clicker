import { Typography, CardMedia, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { styled } from "@mui/material/styles";

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
    width: "41px",
    height: "41px",
    padding: "3px",
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

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: "#EFEFEF",
  width: "48px",
  height: "48px",
  borderRadius: "4px",
  ...theme.typography.body2,
  padding: 0,
  textAlign: "center",
  color: theme.palette.text.secondary,
  position: "relative", // Добавлено для позиционирования счетчика
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export default function BerryItem({ items = [] }) {
  if (!items.length) return null;

  return (
    <Box className="inventory-items" sx={{ mt: "16px" }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1.2}>
          {items.map((berry) => (
            <Grid item key={berry.id}>
              <Item className="item">
                <CardMedia
                  sx={styles.cardMedia}
                  component="img"
                  id={berry.id}
                  image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${berry.item.name}.png`}
                  alt={berry.name}
                />
                {berry.quantity > 1 && (
                  <Typography
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      right: 0,
                      bgcolor: "rgba(0,0,0,0.6)",
                      color: "white",
                      padding: "2px 4px",
                      borderRadius: "4px",
                      fontSize: "12px",
                      minWidth: "20px",
                      textAlign: "center",
                    }}
                  >
                    {berry.quantity}
                  </Typography>
                )}
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
