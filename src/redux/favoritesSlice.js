import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorites: (state, action) => {
      const pickup = action.payload;
      const index = state.findIndex((item) => item._id === pickup._id);
      if (index !== -1) {
        state.splice(index, 1);
      } else {
        state.push(pickup);
      }
    },
  },
});

export const { toggleFavorites } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
