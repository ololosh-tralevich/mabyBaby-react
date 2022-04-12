import { Outlet, Navigate } from 'react-router-dom';

const PublicRoute = () => {
//   if (isLogin) {
//     return <Navigate to="/" />;
//   }

  return <Outlet />;
};

export default PublicRoute;