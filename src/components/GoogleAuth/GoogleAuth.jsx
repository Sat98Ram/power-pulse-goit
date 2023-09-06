import { Navigate, useSearchParams } from "react-router-dom";

import { useDispatch } from "react-redux";
import { token as tokenAPI } from "../../services/privateAPI";
import { refreshThunk } from "../../redux/auth/operations";

export const GoogleAuth = () => {
  const [params] = useSearchParams();
  const token = params.get("token");

  const dispatch = useDispatch();
  if (!token) {
    return <Navigate to={"/welcome"} />;
  }
  tokenAPI.set(token);
  dispatch(refreshThunk());

  return <Navigate to={"/dairy"} />;
};

export default GoogleAuth;
