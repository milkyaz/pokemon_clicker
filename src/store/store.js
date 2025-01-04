// store.js
import { configureStore } from "@reduxjs/toolkit";
import pokemonsReducer from "./slices/pokemonsSlice";
import berriesReducer from "./slices/berriesSlice";
const store = configureStore({
  reducer: {
    pokemons: pokemonsReducer,
    berries: berriesReducer,
  },
});

export default store;
