export const getGlobalStore = ({ auth }) => auth;
export const getUser = ({ state }) => state.user;
export const getIsLogin = ({ auth }) => auth.isUserLogin;
export const getLoading = ({ state }) => state.loading;
export const getError = ({state}) => state.error;