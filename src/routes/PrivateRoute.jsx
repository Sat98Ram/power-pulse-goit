import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { PropTypes } from "prop-types";

import { selectIsAuth } from "@/redux/auth/selectors";

export const PrivateRoute = ({ redirectTo = "/welcome" }) => {
  const isLoggedIn = useSelector(selectIsAuth);
  const location = useLocation();

  return isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to={redirectTo} state={{ from: location }} />
  );
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  redirectTo: PropTypes.string,
};
