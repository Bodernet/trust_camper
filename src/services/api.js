import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "https://661054110640280f219cd815.mockapi.io/";

export const fetchAllPickups = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/advert`);
    if (response.status !== 200) {
      throw new Error("Failed to fetch advert");
    }
    return response.data;
  } catch (error) {
    console.error("Error fetching advert:", error);
    throw error;
  }
};

export const fetchPickups = createAsyncThunk(
  "pickups/fetchPickups",
  async () => {
    const response = await axios.get(`${BASE_URL}/advert`);
    return response.data;
  }
);
