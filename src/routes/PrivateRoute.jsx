import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { PropTypes } from "prop-types";

import { selectIsAuth } from "@/redux/auth/selectors";

export const PrivateRoute = ({ redirectTo = "/welcome" }) => {
  const isLoggedIn = useSelector(selectIsAuth);

  return isLoggedIn ? <Outlet /> : <Navigate to={redirectTo} />;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  redirectTo: PropTypes.string,
};
