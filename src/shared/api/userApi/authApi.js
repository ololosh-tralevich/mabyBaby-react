import axios from 'axios';

axios.defaults.baseURL = 'https://protest-backend.goit.global';

const addAccessToken = token => {
  axios.defaults.headers.common.AccessToken = `Bearer ${token}`;
};

const addRefreshToken = token => {
  axios.defaults.headers.common.RefreshToken = `Bearer ${token}`;
};

const addSessionId = sId => {
  axios.defaults.headers.common.SessionId = `Bearer ${sId}`;
};

const registerUser = userData => {
  const { data: result } = axios.post('/auth/register', userData);
  // console.log('REG: ', result);
  return result;
};

const loginUser = userData => {
  const { data: result } = axios.post('/auth/login', userData);
  addAccessToken(result.accessToken);
  addRefreshToken(result.refreshToken);
  addSessionId(result.sid);
  // console.log('Login: ', result);
  return result;
};

const logoutUser = () => {
  const { data: result } = axios.post('/auth/logout');
  // console.log('Logout: ', result)
  return result;
};

const refreshUser = () => {
  const { data: result } = axios.post('/auth/refresh'); // SID ????
  addAccessToken(result.accessToken);
  addRefreshToken(result.refreshToken);
  addSessionId(result.sid);
  // console.log('Refresh: ', result);
  return result;
};

// Google auth??

const getUserInfo = () => {
  const data = axios.get('/auth/refresh');
  // console.log('GetUsrInfo', result)
  return data;
};

const authApi = {
  registerUser,
  loginUser,
  logoutUser,
  refreshUser,
  getUserInfo,
};

export default authApi;
