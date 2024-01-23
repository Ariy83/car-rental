import { createSlice } from '@reduxjs/toolkit';
import { fetchAllCarsThunk } from './operations';

export const carSlice = createSlice({
  name: 'carSlice',
  initialState: {
    cars: [],
    page: 1,
    modal: {
      car: {},
      isOpen: false,
    },
    isLoading: false,
    isError: null,
  },
  reducers: {
    loadMore: state => {
      state.page += 1;
    },
    toggleModal: (state, { payload }) => {
      state.modal.isOpen = payload;
    },
    openCarModal: (state, { payload }) => {
      state.modal.car = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAllCarsThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchAllCarsThunk.fulfilled, (state, { payload }) => {
        state.cars.push(...payload);
        state.isLoading = false;
      })
      .addCase(fetchAllCarsThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      });
  },
});

export const carReducer = carSlice.reducer;
export const { loadMore, toggleModal, openCarModal } = carSlice.actions;
