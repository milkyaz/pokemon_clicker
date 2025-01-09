import { Typography, CardMedia, Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchBerries } from "../../store/slices/berriesSlice";
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
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export default function BerryItem() {
  const dispatch = useDispatch();
  const berries = useSelector((state) => state.berries.berries);
  const berryImageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${berries.item.name}.png`;
  console.log('berry', berries)

  useEffect(() => {
    if (!berries) {
      dispatch(fetchBerries());
    }
  }, [dispatch, berries]);

  useEffect(() => {
    let visitCount = localStorage.getItem("page_view");
    if (visitCount) {
      visitCount = Number(visitCount) + 1;
    } else {
      visitCount = 1;
    }
    localStorage.setItem("page_view", visitCount);
  }, []);

  if (!berries) return null;

  return (
    <Box className="inventory-items" sx={{ mt: "16px" }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1.2}>
          <Grid>
            <Item className="item">
              <Typography sx={styles.typography} variant="p">
                {/* {berries.name} */}
              </Typography>
              <CardMedia
                sx={styles.cardMedia}
                component="img"
                image={berryImageUrl}
                alt={berries.name}
              />
            </Item>
          </Grid>
          <Grid>
            <Item className="item">
              <Typography sx={styles.typography} variant="p">
                {/* {berries.name} */}
              </Typography>
              <CardMedia
                sx={styles.cardMedia}
                component="img"
                image={berryImageUrl}
                alt={berries.name}
              />
            </Item>
          </Grid>
          <Grid>
            <Item className="item">
              <Typography sx={styles.typography} variant="p">
                {/* {berries.name} */}
              </Typography>
              <CardMedia
                sx={styles.cardMedia}
                component="img"
                image={berryImageUrl}
                alt={berries.name}
              />
            </Item>
          </Grid>
          <Grid>
            <Item className="item">
              <Typography sx={styles.typography} variant="p">
                {/* {berries.name} */}
              </Typography>
              <CardMedia
                sx={styles.cardMedia}
                component="img"
                image={berryImageUrl}
                alt={berries.name}
              />
            </Item>
          </Grid>
          <Grid>
            <Item className="item">
              <Typography sx={styles.typography} variant="p">
                {/* {berries.name} */}
              </Typography>
              <CardMedia
                sx={styles.cardMedia}
                component="img"
                image={berryImageUrl}
                alt={berries.name}
              />
            </Item>
          </Grid>
          <Grid>
            <Item className="item">
              <Typography sx={styles.typography} variant="p">
                {/* {berries.name} */}
              </Typography>
              <CardMedia
                sx={styles.cardMedia}
                component="img"
                image={berryImageUrl}
                alt={berries.name}
              />
            </Item>
          </Grid>
          <Grid>
            <Item className="item">
              <Typography sx={styles.typography} variant="p">
                {/* {berries.name} */}
              </Typography>
              <CardMedia
                sx={styles.cardMedia}
                component="img"
                image={berryImageUrl}
                alt={berries.name}
              />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
