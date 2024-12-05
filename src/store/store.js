// store.js
import { configureStore } from "@reduxjs/toolkit";
import pokemonsReducer from "./pokemonsSlice";

const store = configureStore({
  reducer: {
    pokemons: pokemonsReducer,
  },
});

export default store;
