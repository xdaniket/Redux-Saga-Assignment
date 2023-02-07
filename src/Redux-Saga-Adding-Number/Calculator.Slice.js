import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  result: 0,
  isFetching: false,
};

const calcualatorSlice = createSlice({
  name: "My Calculator",
  initialState,
  reducers: {
    addNumbers: (state, action) => {
      state.isFetching = true;
    },
    addNumbersSuccess: (state, action) => {
      state.isFetching = false;
      state.result = action.payload;
    },
    addNumbersFailed: (state, action) => {
      state.isFetching = false;
    },
  },
});

export const { addNumbers, addNumbersFailed, addNumbersSuccess } =
  calcualatorSlice.actions;

export default calcualatorSlice.reducer;
