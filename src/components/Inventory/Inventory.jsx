import { Box, Typography, CardMedia, Button,  } from "@mui/material";
import { styled } from "@mui/material/styles";
import "./index.css";

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: "#fff",

  ...theme.typography.body2,
  padding: 0,
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));
import Grid from "@mui/material/Grid2";

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
        width: "35vh",
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

      <Box className="inventory-items">
        {/* <Box className="item"></Box> */}
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid >
              <Item className="item" sx={{ width: "48px", height: "48px", bgcolor: '#EFEFEF' }}>size=8</Item>
            </Grid>
            <Grid size={4}>
              <Item className="item">size=4</Item>
            </Grid>
            <Grid size={4}>
              <Item className="item">size=4</Item>
            </Grid>
            <Grid size={8}>
              <Item className="item">size=8</Item>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Button
        className="inventory__button"
        size="small"
        onClick={() => setCount(count - 1000)}
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
      </Button>
    </Box>
  );
}
