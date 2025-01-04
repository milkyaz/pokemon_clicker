import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchBerries = createAsyncThunk("fetchBerries", async () => {
  const random = Math.floor(Math.random() * 40);
  const strRandom = String(random);
  const response = await fetch(`https://pokeapi.co/api/v2/item/${strRandom}`);
  const berry = await response.json();
  localStorage.setItem("randomBerry", JSON.stringify(berry)); // Сохраняем ягоду в localStorage
  return berry;
});
const berrySlice = createSlice({
  name: "berries",
  initialState: {
    isLoading: false,
    berries: JSON.parse(localStorage.getItem("randomBerry")) || null,
    error: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBerries.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchBerries.fulfilled, (state, action) => {
      state.isLoading = false;
      state.berries = action.payload;
    });
    builder.addCase(fetchBerries.rejected, (state, action) => {
      state.error = true;
    });
  },
});

export default berrySlice.reducer;
