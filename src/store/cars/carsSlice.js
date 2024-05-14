import { createSlice } from "@reduxjs/toolkit";
import { fetchCars, getCar } from "./carsOperations";

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getCar.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCar.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(getCar.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const carsReducer = carsSlice.reducer;
