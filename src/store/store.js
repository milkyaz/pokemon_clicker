// store.js
import { configureStore } from "@reduxjs/toolkit";
import pokemonsReducer from "./slices/pokemonsSlice";
import berriesReducer from "./slices/berriesSlice";
import itemsReduce from "./slices/itemsSlice";
const store = configureStore({
  reducer: {
    pokemons: pokemonsReducer,
    berries: berriesReducer,
    items: itemsReduce,
  },
});

export default store;
