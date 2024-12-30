import { Container, Paper, Box } from "@mui/material";
import { Inventory } from "../Inventory/Inventory";
import { Header } from "../Header/Header";
import { MyPokemonsModal } from "../MyPokemonsModal/MyPokemonsModal";
import { useState, useEffect, useRef } from "react";
import { Shop } from "../Shop/Shop";
import "./index.css";

export const HomePageGame = () => {
  return (
    <>
      <Container maxWidth="m" sx={{ height: "100vh", padding: { xs: 0 } }}>
        <Paper
          variant="outlined"
          sx={{ boxShadow: "0px 1px 5px 0px rgba(0, 0, 0, 0.5)" }}
        >
          <Header />
        </Paper>
        <Box className="main__content" sx={{ display: "flex", mt: "20px" }}>
          <Inventory />
          <MyPokemonsModal />

          <Shop />
        </Box>
        <Box className="footer"></Box>
      </Container>
    </>
  );
};
