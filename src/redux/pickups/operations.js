import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import { fetchAllPickups } from "../../services/api";

const getPickups = createAsyncThunk("advert/get", async (_, thunkAPI) => {
  try {
    const data = await fetchAllPickups();
    if (!Array.isArray(data)) {
      throw new Error("API response is not an array");
    }
    return data;
  } catch (err) {
    toast.error(
      "Error fetching campers. Try reloading the page or come back later."
    );
    return thunkAPI.rejectWithValue(err.message);
  }
});

export { getPickups };
