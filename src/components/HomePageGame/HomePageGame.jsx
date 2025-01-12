// import { Container, Paper, Box } from "@mui/material";
// import { Inventory } from "../Inventory/Inventory";
// import { Header } from "../Header/Header";
// import { MyPokemonsModal } from "../MyPokemonsModal/MyPokemonsModal";
// import { useState, useEffect, useRef } from "react";
// import Shop from "../Shop/Shop";
// import "./index.css";

// export const HomePageGame = () => {
//   return (
//     <>
//       <Container maxWidth="m" sx={{ height: "100vh", padding: { xs: 0 } }}>
//         <Paper
//           variant="outlined"
//           sx={{ boxShadow: "0px 1px 5px 0px rgba(0, 0, 0, 0.5)" }}
//         >
//           <Header />
//         </Paper>
//         <Box className="main__content" sx={{ display: "flex", mt: "20px" }}>
//           <Inventory />
//           <MyPokemonsModal />
//           <Shop />
//         </Box>
//         <Box className="footer"></Box>
//       </Container>
//     </>
//   );
// };

import { Container, Paper, Box } from "@mui/material";
import { Inventory } from "../Inventory/Inventory";
import { Header } from "../Header/Header";
import { MyPokemonsModal } from "../MyPokemonsModal/MyPokemonsModal";
import { useState } from "react";
import Shop from "../Shop/Shop";
import "./index.css";

export const HomePageGame = () => {
  // Состояние для хранения купленных ягод
  const [inventoryBerries, setInventoryBerries] = useState([]);

  // Функция для добавления ягод в инвентарь
  const handleAddBerry = (berry) => {
    setInventoryBerries(prevBerries => {
      const existingBerry = prevBerries.find(item => item.id === berry.id);
      
      if (existingBerry) {
        return prevBerries.map(item =>
          item.id === berry.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevBerries, { ...berry, quantity: 1 }];
      }
    });
  };

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
          <Inventory berries={inventoryBerries} />
          <MyPokemonsModal />
          <Shop onBuyBerry={handleAddBerry} />
        </Box>
        <Box className="footer"></Box>
      </Container>
    </>
  );
};