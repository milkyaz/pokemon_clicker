import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


//https://pokeapi.co/api/v2/berry/

export const fetchRandomBerry = createAsyncThunk(
  "berries/fetchRandomBerry",
  async () => {
    const randomBerryId = Math.floor(Math.random() * 100) + 1;
    const response = await axios.get(
      `https://pokeapi.co/api/v2/berry/${randomBerryId}`
    );
    return response.data;
  }
);
const initialState = {
  berry: JSON.parse(localStorage.getItem("berry")) || null,
  status: "idle",
  error: null,
};

const berriesSlice = createSlice({
  name: "berries",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomBerry.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRandomBerry.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Сохраняем только одного покемона
        state.berry = action.payload;
        localStorage.setItem("berry", JSON.stringify(state.berry));
      })
      .addCase(fetchRandomBerry.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// export const { setBerries } = berriesSlice.actions;
export default berriesSlice.reducer;