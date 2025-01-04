import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPokemons = createAsyncThunk("fetchPokemons", async () => {
  const random = Math.floor(Math.random() * 40);
  const strRandon = String(random);
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${strRandon}`
  );
  const pokemon = await response.json();
  localStorage.setItem("randomPokemon", JSON.stringify(pokemon)); // Сохраняем покемона в localStorage
  return pokemon;
});
const pokemonSlice = createSlice({
  name: "pokemons",
  initialState: {
    isLoading: false,
    pokemons: JSON.parse(localStorage.getItem("randomPokemon")) || null,
    error: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPokemons.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchPokemons.fulfilled, (state, action) => {
      state.isLoading = false;
      state.pokemons = action.payload;
    });
    builder.addCase(fetchPokemons.rejected, (state, action) => {
      state.error = true;
    });
  },
});

export default pokemonSlice.reducer;
