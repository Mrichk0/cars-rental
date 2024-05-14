import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriteItems: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      const existingItem = state.favoriteItems.find(
        (item) => item.id === action.payload.id
      );
      if (!existingItem) {
        state.favoriteItems.push(action.payload);
      }
    },
    removeFromFavorites: (state, action) => {
      state.favoriteItems = state.favoriteItems.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;

export const favoritesReducer = favoritesSlice.reducer;
