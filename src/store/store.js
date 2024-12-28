// store.js
import { configureStore } from "@reduxjs/toolkit";
import pokemonsReducer from "./pokemonsSlice";
import berriesReducer from "./berriesSlice";

const store = configureStore({
  reducer: {
    pokemons: pokemonsReducer,
    berries: berriesReducer,
  },
});

export default store;
