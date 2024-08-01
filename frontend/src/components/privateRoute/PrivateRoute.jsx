import { node } from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';


const PrivateRoute = ({ children }) => {
  const location = useLocation();

  const [user] = useAuthState(auth);

  const isAuthenticated = user || localStorage.getItem('authUser');

  if (!isAuthenticated) {
    return <Navigate to={"/"} state={{ from: location }} replace />;
  }


  return <>{children}</>;
};

PrivateRoute.propTypes = {
  children: node,
};

export default PrivateRoute;
