import { Navigate, Outlet, useNavigate } from 'react-router';


const PrivateRoutes = ({ hasAuthorization, children }) => {
  
    if (!hasAuthorization) {
        return <Navigate to='/login' />;
    }

    return children ? children : <Outlet />;
};

export default PrivateRoutes;
