import { createAsyncThunk } from '@reduxjs/toolkit';

import qaApi from '../../shared/api/qaApi/qaApi';

const getTechTest = createAsyncThunk(
  '/qa-test/tech',
  async (_, { rejectWithValue }) => {
    try {
        console.log('result');
        const result = await qaApi.getTechTest();
        console.log(result);
      return result;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const getTheoryTest = createAsyncThunk(
  '/qa-test/theory',
  async (_, { rejectWithValue }) => {
    try {
      const result = await qaApi.getTheoryTest();
      console.log(result);
      return result;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const getTechResults = createAsyncThunk(
  '/qa-test/tech-results',
  async (userAnswers, { rejectWithValue }) => {
    try {
      const result = await qaApi.getTechResult(userAnswers);
      console.log(result);
      return result;
    } catch (err) {
      rejectWithValue(err);
    }
  }
);

const getTheoryResult = createAsyncThunk(
  '/qa-test/theory-results',
  async (userAnswers, { rejectWithValue }) => {
    try {
      const result = await qaApi.getTheoryResult(userAnswers);
      console.log(result);
      return result;
    } catch (err) {
      rejectWithValue(err);
    }
  }
);

export const qaOperations = {
  getTechTest,
  getTheoryTest,
  getTechResults,
  getTheoryResult,
};
