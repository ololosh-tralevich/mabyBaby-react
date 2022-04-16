import { Outlet, Navigate } from 'react-router-dom';

import { shallowEqual, useSelector } from 'react-redux';

import { getIsLogin } from '../../../redux/userAccount/userAccount-selectors';

const PublicRoute = () => {
  const isLogin = useSelector(getIsLogin, shallowEqual);
  if (isLogin) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default PublicRoute;
