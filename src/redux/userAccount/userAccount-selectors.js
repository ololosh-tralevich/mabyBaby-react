export const getGlobalStore = ({ auth }) => auth;
export const getUser = ({ state }) => state.user;
// export const getUserToken = ({state}) => state.token;
export const getIsLogin = ({ state }) => state.isLogin;
export const getLoading = ({ state }) => state.loading;
export const getError = ({state}) => state.error;