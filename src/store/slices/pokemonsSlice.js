import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPokemons = createAsyncThunk("fetchPokemons", async () => {
  const random = Math.floor(Math.random() * 40);
  const strRandon = String(random);
  const pokemons = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${strRandon}`
  );
  return pokemons.json();
});
const pokemonSlice = createSlice({
  name: "pokemons",
  initialState: {
    isLoading: false,
    pokemons: null,
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
