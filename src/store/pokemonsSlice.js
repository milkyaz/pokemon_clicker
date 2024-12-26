// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// const randomPokemonId = Math.floor(Math.random() * 100) + 1;
// export const fetchPokemons = createAsyncThunk(
//   "pokemons/fetchPokemons",
//   async () => {
//     const response = await axios.get(
//       `https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`
//     );

//     // Получаем данные одного покемона
//     const pokemonData = response.data;

//     // Возвращаем данные одного покемона
//     return [pokemonData];
//   }
// );

// const initialState = {
//   pokemons: JSON.parse(localStorage.getItem("pokemons")) || [],
//   filter: "",
//   status: "idle",
//   error: null,
// };

// const pokemonsSlice = createSlice({
//   name: "pokemons",
//   initialState,
//   reducers: {
//     setFilter: (state, action) => {
//       state.filter = action.payload;
//       localStorage.setItem("pokemons", JSON.stringify(state.pokemons));
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchPokemons.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(fetchPokemons.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         state.pokemons = action.payload;
//         localStorage.setItem("pokemons", JSON.stringify(state.pokemons));
//       })
//       .addCase(fetchPokemons.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.error.message;
//       });
//   },
// });

// export const { setFilter } = pokemonsSlice.actions;

// export const selectFilteredPokemons = (state) => {
//   const { pokemons, filter } = state.pokemons;
//   if (!filter) {
//     return pokemons;
//   }
//   return pokemons.filter((product) => product.category === filter);
// };

// export default pokemonsSlice.reducer;
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
