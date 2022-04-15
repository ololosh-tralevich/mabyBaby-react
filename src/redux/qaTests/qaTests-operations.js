import { createAsyncThunk } from '@reduxjs/toolkit';

import qaApi from '../../shared/api/qaApi/qaApi';

const getTechTest = createAsyncThunk(
  '/qa-test/tech',
  async (_, { rejectWithValue }) => {
    try {
      const result = await qaApi.getTechTest();
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
      return result;
    } catch (err) {
      rejectWithValue(err);
    }
  }
);

const getTheoryResults = createAsyncThunk(
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
  getTheoryResults,
};
