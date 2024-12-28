import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRandomPokemon = createAsyncThunk(
  "pokemons/fetchRandomPokemon",
  async () => {
    const randomPokemonId = Math.floor(Math.random() * 100) + 1;
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`
    );
    return response.data;
  }
);

const initialState = {
  pokemon: JSON.parse(localStorage.getItem("pokemon")) || null,
  status: "idle",
  error: null,
};

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomPokemon.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRandomPokemon.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Сохраняем только одного покемона
        state.pokemon = action.payload;
        localStorage.setItem("pokemon", JSON.stringify(state.pokemon));
      })
      .addCase(fetchRandomPokemon.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setPokemons } = pokemonsSlice.actions;
export default pokemonsSlice.reducer;
