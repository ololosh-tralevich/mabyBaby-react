import { createReducer } from '@reduxjs/toolkit';

import { createSlice } from '@reduxjs/toolkit';

import testTypeAction from './qaTests-actions';

import { qaOperations } from './qaTests-operations';

const { getTechTest, getTheoryTest, getTechResults, getTheoryResult } =
  qaOperations;

const initialState = {
  testType: null,
  questionsArr: [],
  loading: false,
  error: false,
};

export const testType = createReducer('', {
  [testTypeAction]: (state, { payload }) => {
    console.log(payload);
    return (state = payload);
  },
});

const qaSlice = createSlice({
  name: 'qaTests',
  initialState,
  extraReducers: {
    [getTechTest.pending]: state => {
      state.loading = true;
      state.error = false;
    },
    [getTechTest.fulfilled]: (state, { payload }) => {
      console.log(payload);
      // state.
    },
    [getTechTest.rejected]: state => {
      state.loading = false;
      state.error = true;
    },
  },
});

export default qaSlice.reducer;
