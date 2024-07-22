import { createSlice } from "@reduxjs/toolkit";
import { getPickups } from "./operations.js";

const pickupSlice = createSlice({
  name: "advert",
  initialState: {
    pickups: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPickups.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPickups.fulfilled, (state, action) => {
        state.loading = false;
        state.pickups = action.payload;
      })
      .addCase(getPickups.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const pickupReducer = pickupSlice.reducer;
