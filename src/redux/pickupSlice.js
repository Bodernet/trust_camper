import { createSlice } from "@reduxjs/toolkit";
import { fetchPickups } from "../services/api.js";

const initialState = {
  loading: false,
  error: null,
  pickup: [],
};

export const pickupSlice = createSlice({
  name: "pickup",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPickups.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPickups.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.vans = action.payload;
      })
      .addCase(fetchPickups.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
