import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { PropTypes } from "prop-types";

import { selectIsAuth } from "@/redux/auth/selectors";
import { selectisLoading } from "@/redux/auth/selectors";
import Loader from "@/components/Loader/Loader";

export const PrivateRoute = ({ redirectTo = "/welcome" }) => {
  const isLoggedIn = useSelector(selectIsAuth);
  const isLoading = useSelector(selectisLoading);
  const location = useLocation();

  return isLoading ? (
    <Loader />
  ) : isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to={redirectTo} state={{ from: location }} />
  );
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  redirectTo: PropTypes.string,
};
