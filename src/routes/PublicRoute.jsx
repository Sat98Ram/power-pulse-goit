import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { PropTypes } from "prop-types";

import { selectIsAuth } from "@/redux/auth/selectors";

export const PublicRoute = ({ redirectTo = "/params" }) => {
  const isLoggedIn = useSelector(selectIsAuth);

  const { state } = useLocation();
  const link = state?.from.pathname || redirectTo;

  return isLoggedIn ? <Navigate to={link} /> : <Outlet />;
};

export default PublicRoute;

PublicRoute.propTypes = {
  redirectTo: PropTypes.string,
};
