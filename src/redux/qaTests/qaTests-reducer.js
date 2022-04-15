import { createReducer } from '@reduxjs/toolkit';

import { createSlice } from '@reduxjs/toolkit';

import testTypeAction from './qaTests-actions';

import { qaOperations } from './qaTests-operations';

const { getTechTest, getTheoryTest, getTechResults, getTheoryResults } =
  qaOperations;

const initialState = {
  questionsArr: [],
  testResult: {
    mainMessage: '',
    result: '',
    secondaryMessage: '',
  },
  loading: false,
  error: false,
};

export const testType = createReducer(null, {
  [testTypeAction]: (state, { payload }) => {
    return (state = payload);
  },
});

const qaSlice = createSlice({
  name: 'qaTests',
  initialState,
  extraReducers: {
    [getTechTest.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [getTechTest.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.questionsArr = [...payload.data];
    },
    [getTechTest.rejected]: state => {
      state.loading = false;
      state.error = true;
    },

    [getTheoryTest.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [getTheoryTest.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.questionsArr = [...payload.data];
    },
    [getTheoryTest.rejected]: state => {
      state.loading = false;
      state.error = true;
    },

    [getTechResults.pending]: state => {
      state.loading = true;
      state.error = false;
    },
    [getTechResults.fulfilled]: (state, { payload }) => {
      state.testResult = { ...payload.data };
      state.loading = false;
    },
    [getTechResults.rejected]: state => {
      state.loading = false;
      state.error = true;
    },

    [getTheoryResults.pending]: state => {
      state.loading = true;
      state.error = false;
    },
    [getTheoryResults.fulfilled]: (state, { payload }) => {
      state.testResult = { ...payload.data };
      state.loading = false;
    },
    [getTheoryResults.rejected]: state => {
      state.loading = false;
      state.error = true;
    },
  },
});

export default qaSlice.reducer;
