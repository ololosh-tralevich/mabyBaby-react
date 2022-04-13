import {Outlet, Navigate} from 'react-router-dom';

const PrivateRoute = () => {
    //  if (!isLogin) {
    //     return <Navigate to='auth'/>
    // }

    return <Outlet/>
}

export default PrivateRoute;