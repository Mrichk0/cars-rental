import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://636b89847f47ef51e1333951.mockapi.io/";

export const fetchCars = createAsyncThunk(
  "cars/fetchAll",
  async (page, thunkAPI) => {
    try {
      const response = await axios.get(`advert?page=${page}&limit=12`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.massage);
    }
  }
);

export const getCar = createAsyncThunk("cars/getCar", async (id, thunkAPI) => {
  try {
    const response = await axios.get(`advert/${id}`);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.massage);
  }
});
