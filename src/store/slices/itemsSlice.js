import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchItems = createAsyncThunk("fetchItems", async () => {
  const items = [];
  for (let i = 0; i < 25; i++) {
    const random = Math.floor(Math.random() * 40);
    const strRandom = String(random);
    const response = await fetch(`https://pokeapi.co/api/v2/item/${strRandom}`);
    const item = await response.json();
    items.push(item);
  }

  localStorage.setItem("randomItem", JSON.stringify(items)); // Сохраняем ягоды в localStorage
  
  return items;
});

const itemSlice = createSlice({
  name: "items",
  initialState: {
    isLoading: false,
    items: JSON.parse(localStorage.getItem("randomItem")) || null,
    error: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchItems.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchItems.fulfilled, (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
    });
    builder.addCase(fetchItems.rejected, (state, action) => {
      state.error = true;
    });
  },
});

export default itemSlice.reducer;
