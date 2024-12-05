// pokemonsSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPokemons = createAsyncThunk(
  "pokemons/fetchPokemons",
  async () => {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon/?results");
    return response.data;
  }
);

const initialState = {
  pokemons: [],
  filter: "",
  status: "idle",
  error: null,
};

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemons.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPokemons.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.pokemons = action.payload;
      })
      .addCase(fetchPokemons.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setFilter } = pokemonsSlice.actions;

export const selectFilteredPokemons = (state) => {
  const { pokemons, filter } = state.pokemons;
  if (!filter) {
    return pokemons;
  }
  return pokemons.filter((product) => product.category === filter);
};

export default pokemonsSlice.reducer;
