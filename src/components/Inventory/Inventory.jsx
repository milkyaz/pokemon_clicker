import { Box, Typography, CardMedia, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { styled } from "@mui/material/styles";
import { fetchBerries } from "../../store/slices/berriesSlice";

import "./index.css";

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
    width: "41px",
    height: "41px",
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

export default function BerryList() {
  const dispatch = useDispatch();
  const berries = useSelector((state) => state.berries.berries);

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
  console.log(berries.sprites.default);

  return (
    <>
      <Box className="box__item">
        <Box sx={styles.cardBox}>
          <Typography sx={styles.typography} variant="p">
            {berries.name}
          </Typography>
          <CardMedia
            sx={styles.cardMedia}
            component="img"
            image={berries.sprites.default}
            alt={berries.name}
          />
        </Box>
      </Box>
    </>
  );
}

export function Inventory() {
  // const IMAGES = {
  //   image3: new URL("./img/money-logo.png", import.meta.url).href,
  // };
  return (
    <Box
      className="inventory"
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "56vh",
        height: "86vh",
        boxShadow: "0px 1px 5px 0px rgba(0, 0, 0, 0.5)",
        mr: "20px",
        borderRadius: "16px",
        p: "16px 16px 9px 16px",
      }}
    >
      <Typography variant="h4" sx={{ fontSize: "24px" }}>
        Inventory
      </Typography>

      <Box className="inventory-items" sx={{ mt: "16px" }}>
        <Box sx={{ flexGrow: 1 }}>
          {/* <Grid container spacing={1.5}>
            <Grid>
              <Item className="item">size=8</Item>
            </Grid>
            <Grid>
              <Item className="item">size=4</Item>
            </Grid>
            <Grid>
              <Item className="item">size=4</Item>
            </Grid>
            <Grid>
              <Item className="item">size=8</Item>
            </Grid>
            <Grid>
              <Item className="item">size=8</Item>
            </Grid>
            <Grid>
              <Item className="item">size=8</Item>
            </Grid>
            <Grid>
              <Item className="item">size=4</Item>
            </Grid>
            <Grid>
              <Item className="item">size=4</Item>
            </Grid>
            <Grid>
              <Item className="item">size=8</Item>
            </Grid>
            <Grid>
              <Item className="item">size=8</Item>
            </Grid>
            <Grid>
              <Item className="item">size=8</Item>
            </Grid>
            <Grid>
              <Item className="item">size=4</Item>
            </Grid>
            <Grid>
              <Item className="item">size=4</Item>
            </Grid>
            <Grid>
              <Item className="item">size=8</Item>
            </Grid>
            <Grid>
              <Item className="item">size=8</Item>
            </Grid>
          </Grid> */}
          <BerryList />
        </Box>
      </Box>
    </Box>
  );
}
