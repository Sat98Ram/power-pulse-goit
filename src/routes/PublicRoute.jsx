import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { PropTypes } from "prop-types";

import { selectIsAuth } from "@/redux/auth/selectors";

export const PublicRoute = ({ redirectTo = "/diary" }) => {
  const isLoggedIn = useSelector(selectIsAuth);

  return isLoggedIn ? <Navigate to={redirectTo} /> : <Outlet />;
};

export default PublicRoute;

PublicRoute.propTypes = {
  redirectTo: PropTypes.string,
};
