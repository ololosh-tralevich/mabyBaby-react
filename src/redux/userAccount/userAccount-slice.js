import { createSlice } from '@reduxjs/toolkit';

import { userOperations } from './userAccount-operations';

const { registerUser, loginUser, logoutUser, getCurrentUser } =
  userOperations;

const initialState = {
  user: {
    email: '',
    id: '',
  },
  accessToken: '',
  isUserLogin: false,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [registerUser.pending]: state => {
      state.loading = true;
      state.error = false;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      state.user = { ...payload };
      state.isUserLogin = true;
      state.loading = false;
    },
    [registerUser.rejected]: state => {
      state.error = true;
      state.loading = false;
    },

    [loginUser.pending]: state => {
      state.loading = true;
      state.error = false;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      state.user = { ...payload.userData };
      state.accessToken = payload.accessToken;
      state.isUserLogin = true;
      state.loading = false;
    },
    [loginUser.rejected]: state => {
      state.error = true;
      state.loading = false;
    },

    [logoutUser.pending]: state => {
      state.loading = true;
      state.error = false;
    },
    [logoutUser.fulfilled]: state => {
      state.user = { email: '', id: '' };
      state.accessToken = '';
      state.isUserLogin = false;
      state.loading = false;
    },
    [logoutUser.rejected]: state => {
      state.loading = false;
      state.error = true;
    },

    [getCurrentUser.pending]: state => {
      state.loading = true;
      state.error = false;
    },
    [getCurrentUser.fulfilled]: (state, { payload }) => {
      state.user.email = payload.email;
      state.isUserLogin = true;
      state.loading = false;
    },
    [getCurrentUser.rejected]: state => {
      state.loading = false;
      state.error = true;
    },
  },
});

export default userSlice.reducer;
