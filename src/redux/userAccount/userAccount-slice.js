import { createSlice } from '@reduxjs/toolkit';

import { userOperations } from './userAccount-operations';

const { registerUser, loginUser, logoutUser, refreshUser, getUserInfo } =
  userOperations;

const initialState = {
  user: {
    email: '',
    id: '',
  },
  accessToken: '',
  refreshToken: '',
  sessionId: '',
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
      // console.log(payload);
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
      state.refreshToken = payload.refreshToken;
      state.sessionId = payload.sid;
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
      state.refreshToken = '';
      state.sessionId = '';
      state.isUserLogin = false;
      state.loading = false;
    },
    [logoutUser.rejected]: state => {
      state.loading = false;
      state.error = true;
    },

    [refreshUser.pending]: state => {
      state.loading = true;
      state.error = false;
    },
    [refreshUser.fulfilled]: (state, { payload }) => {
      state.accessToken = payload.newAccessToken;
      state.refreshToken = payload.newRefreshToken;
      state.sessionId = payload.newSid;
      state.loading = false;
    },
    [refreshUser.rejected]: state => {
      state.loading = false;
      state.error = true;
    },

    [getUserInfo.pending]: state => {
      state.loading = true;
      state.error = false;
    },
    [getUserInfo.fulfilled]: (state, { payload }) => {
      state.user.email = payload.email;
      state.isUserLogin = true;
      state.loading = false;
    },
    [getUserInfo.rejected]: state => {
      state.loading = false;
      state.error = true;
    },
  },
});

export default userSlice.reducer;
