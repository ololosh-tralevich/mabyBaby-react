import { createAsyncThunk } from '@reduxjs/toolkit';

import authApi from '../../shared/api/userApi/authApi';

const registerUser = createAsyncThunk(
  '/auth/register',
  async (userData, { rejectWithValue }) => {
    try {
      const result = await authApi.registerUser(userData);
      return result;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const loginUser = createAsyncThunk(
  '/auth/login',
  async (userData, { rejectWithValue }) => {
    try {
      const result = await authApi.loginUser(userData);
      return result;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const logoutUser = createAsyncThunk(
  '/auth/logout',
  async (userData, { rejectWithValue }) => {
    try {
      const result = await authApi.logoutUser(userData); //user data ??
      return result;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const refreshUser = createAsyncThunk(
  '/user/refresh',
  async (_, { getState, rejectWithValue }) => {
    const { auth } = getState();
    try {
      const result = await authApi.refreshUser({sid: auth.sessionId});
      return result;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
  {
    condition: (_, { getState }) => {
      const { auth } = getState();
      if (!auth.sessionId) {
        return false;
      }
    },
  }
);

const getUserInfo = createAsyncThunk(
  '/user',
  async (_, { getState, rejectWithValue }) => {
    try {
      const { auth } = getState();
      const result = await authApi.getUserInfo(auth.user.email);
      return result;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
  {
    condition: (_, { getState }) => {
      const { auth } = getState();
      if (!auth.user.email) {
        return false;
      }
    },
  }
);

export const userOperations = {
  registerUser,
  loginUser,
  logoutUser,
  refreshUser,
  getUserInfo,
};
