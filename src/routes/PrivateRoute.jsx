import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { PropTypes } from "prop-types";

import { selectIsAuth, selectorBodyData } from "@/redux/auth/selectors";

export const PrivateRoute = ({ redirectTo = "/welcome" }) => {
  const isLoggedIn = useSelector(selectIsAuth);

  const isVerified = useSelector(selectorBodyData);
  const location = useLocation();

  const params = location.pathname === "/params";

  return isLoggedIn ? (
    !isVerified && !params ? (
      <Navigate to="/params" />
    ) : isVerified && params ? (
      <Navigate to="/diary" />
    ) : (
      <Outlet />
    )
  ) : (
    <Navigate to={redirectTo} state={{ from: location }} />
  );
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  redirectTo: PropTypes.string,
};
