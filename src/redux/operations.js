import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://6582d93502f747c8367a5cda.mockapi.io';

export const fetchAllCarsThunk = createAsyncThunk(
  'fetchAll',
  async (page, thunkApi) => {
    try {
      const { data } = await axios.get('cars', { params: { page, limit: 12 } });
      return data;
    } catch (error) {
      toast.error(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
