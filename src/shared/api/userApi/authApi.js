import axios from 'axios';

axios.defaults.baseURL = 'https://protest-backend.goit.global';

const addAccessToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const addRefreshToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const registerUser = async userData => {
  const { data: result } = await axios.post('/auth/register', userData);
  return result;
};

const loginUser = async userData => {
  const { data: result } = await axios.post('/auth/login', userData);
  addAccessToken(result.accessToken);
  addRefreshToken(result.refreshToken);
  return result;
};

const logoutUser = async () => {
  const { data: result } = await axios.post('/auth/logout');
  // console.log('Logout: ', result);
  return result;
};

const refreshUser = async sId => {
  const { data: result } = await axios.post('/auth/refresh', sId);
  // console.log('Refresh: ', result);
  return result;
};

// Google auth??

const getUserInfo = async userEmail => {
  const { data: result } = await axios.get('/user', userEmail); // Возвращает Email ! ! !
  // console.log('GetUsrInfo', result)
  return result;
};

const authApi = {
  registerUser,
  loginUser,
  logoutUser,
  refreshUser,
  getUserInfo,
};

export default authApi;
