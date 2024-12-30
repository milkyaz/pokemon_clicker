import { Box, Typography, CardMedia, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { fetchRandomBerry } from "../../store/berriesSlice";
import { useEffect } from "react";
import { styled } from "@mui/material/styles";
import BerryItem from "../BerryItem/BerryItem";
import Grid from "@mui/material/Grid2";
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

const BerryList = () => {
  const dispatch = useDispatch();
  const pokemonsStatus = useSelector((state) => state.pokemons.status);
  const error = useSelector((state) => state.pokemons.error);

  let visitCount = localStorage.getItem("page_view");
  if (visitCount) {
    visitCount = Number(visitCount) + 1;
    localStorage.setItem("page_view", visitCount);
  } else {
    visitCount = 1;
    localStorage.setItem("page_view", 1);
  }

  useEffect(() => {
    if (!localStorage.getItem("pokemon")) {
      dispatch(fetchRandomBerry());
    }
  }, [dispatch]);

  if (pokemonsStatus === "loading") return <div>Loading...</div>;
  if (pokemonsStatus === "failed") return <div>Error: {error}</div>;
  // return <BerryItem />;
};

export function Inventory({ setCount, count }) {
  const IMAGES = {
    image3: new URL("./img/money-logo.png", import.meta.url).href,
  };
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
          <BerryItem />
        </Box>
      </Box>
      {/* <Button
        className="inventory__button"
        size="small"
        onClick={() => setCount(count - 1000)}
        sx={{ mt: "12px" }}
      >
        <CardMedia
          className={"inventory__button-img"}
          sx={{ width: "32px" }}
          component="img"
          image={IMAGES.image3}
          alt="Logo"
        />{" "}
        <Typography variant="p" sx={{ fontSize: "24px" }}>
          1000
        </Typography>
      </Button> */}
    </Box>
  );
}
