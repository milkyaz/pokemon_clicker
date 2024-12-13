import { Container, Paper, Box } from "@mui/material";
import { Inventory } from "../Inventory/Inventory";
import { Header } from "../Header/Header";
import { MyPokemonsModal } from "../MyPokemonsModal/MyPokemonsModal";
import { useState, useEffect } from "react";
import { Shop } from "../Shop/Shop";
import "./index.css";

export const HomePageGame = () => {
  const [count, setCount] = useState(100000000);
  useEffect(() => {
    const id = setInterval(() => setCount((oldCount) => oldCount + 1), 1000);

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <>
      <Container maxWidth="m" sx={{ height: "100vh", padding: { xs: 0 } }}>
        <Paper
          variant="outlined"
          sx={{ boxShadow: "0px 1px 5px 0px rgba(0, 0, 0, 0.5)" }}
        >
          <Header count={count} />
        </Paper>
        <Box className="main__content" sx={{ display: "flex", mt: "20px" }}>
          <Inventory count={count} setCount={setCount} />
          <MyPokemonsModal />
          <Shop />
        </Box>
        <Box className="footer"></Box>
      </Container>
    </>
  );
};
