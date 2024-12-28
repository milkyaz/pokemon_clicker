import { Container, Paper, Box } from "@mui/material";
import { Inventory } from "../Inventory/Inventory";
import { Header } from "../Header/Header";
import { MyPokemonsModal } from "../MyPokemonsModal/MyPokemonsModal";
import { useState, useEffect, useRef } from "react";
import { Shop } from "../Shop/Shop";
import "./index.css";

export const HomePageGame = () => {
  let secondValue = 1;
  function setDefaultValue() {
    const userCount = localStorage.getItem("count");
    return userCount ? +userCount : 0;
  }
  const [count, setCount] = useState(setDefaultValue());
  const [isCounting, setIsCount] = useState(0);
  const timerIdRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  const [seconds, setSeconds] = useState(1);

  useEffect(() => {
    timerIdRef.current = setInterval(() => {
      setCount((prevCount) => prevCount + secondValue);
    }, 1000);

    return () => {
      timerIdRef.current && clearInterval(timerIdRef.current);
      clearInterval(timerIdRef.current);
      timerIdRef.current = null;
    };
  }, [isCounting]);

  
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
          <Inventory count={seconds} setCount={setSeconds} />
          <MyPokemonsModal secondValue={secondValue} />

          <Shop />
        </Box>
        <Box className="footer"></Box>
      </Container>
    </>
  );
};
