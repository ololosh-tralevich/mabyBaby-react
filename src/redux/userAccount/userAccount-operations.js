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
  async (sessionId, { rejectWithValue }) => {
    try {
      const result = await authApi.refreshUser(sessionId); //session id ??
      return result;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const getUserInfo = createAsyncThunk(
  '/user',
  async (_, { getState, rejectWithValue }) => {
    try {
      const { user } = getState();
      const result = await authApi.getUserInfo(user.token); //user token ??
      return result;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
  {
    condition: (_, { getState }) => {
      const { user } = getState();
      if (!user.token) {
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
