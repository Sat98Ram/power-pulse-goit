import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { PropTypes } from "prop-types";

import {
  selectIsAuth,
  selectisLoading,
  selectorBodyData,
} from "@/redux/auth/selectors";
import Loader from "@/components/Loader/Loader";

export const PrivateRoute = ({ redirectTo = "/welcome" }) => {
  const isLoggedIn = useSelector(selectIsAuth);
  const isLoading = useSelector(selectisLoading);
  const isVerified = useSelector(selectorBodyData);
  const location = useLocation();

  const params = location.pathname === "/params";

  return isLoading ? (
    <Loader />
  ) : isLoggedIn ? (
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
