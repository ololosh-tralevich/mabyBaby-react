import { createReducer } from '@reduxjs/toolkit';

import { createSlice } from '@reduxjs/toolkit';

import { qaOperations } from './qaTests-operations';

const { setTestType,  getResults } = qaOperations;

const initialState = {  
  testResult: {
    mainMessage: '',
    result: '',
    secondaryMessage: '',
  },
  loading: false,
  error: false,
};

export const testType = createReducer(null, {
  [setTestType]: (state, { payload }) => {
    return (state = payload);
  },
});

const qaSlice = createSlice({
  name: 'qaTests',
  initialState,
  extraReducers: {    
    [getResults.pending]: state => {
      state.loading = true;
      state.error = false;
    },
    [getResults.fulfilled]: (state, { payload }) => {      
      state.testResult = { ...payload };
      state.loading = false;
    },
    [getResults.rejected]: state => {
      state.loading = false;
      state.error = true;
    },
  },
});

export default qaSlice.reducer;
