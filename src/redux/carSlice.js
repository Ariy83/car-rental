import { createSlice } from '@reduxjs/toolkit';
import { fetchAllCarsThunk } from './operations';

export const carSlice = createSlice({
  name: 'carSlice',
  initialState: {
    cars: [],
    page: 1,
    modalIsOpen: false,
    isLoading: false,
    isError: null,
  },
  reducers: {
    toggleModal: (state, { payload }) => {
      state.modalIsOpen = payload;
    },
    loadMore: state => {
      state.page += 1;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAllCarsThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchAllCarsThunk.fulfilled, (state, { payload }) => {
        state.cars = payload;
        state.isLoading = false;
      })
      .addCase(fetchAllCarsThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      });
  },
});

export const carReducer = carSlice.reducer;
export const { toggleModal } = carSlice.actions;
