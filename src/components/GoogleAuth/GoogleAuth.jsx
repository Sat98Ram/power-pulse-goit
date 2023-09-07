import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate, useParams } from "react-router-dom";

import { token as tokenAPI } from "../../services/privateAPI";
import { refreshThunk } from "../../redux/auth/operations";

export const GoogleAuth = () => {
  // const [params] = useSearchParams();
  // const token = params.get("token");
  const { token } = useParams();

  const dispatch = useDispatch();
  console.log("token", token);

  if (token) {
    tokenAPI.set(token);
  }
  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  if (!token) {
    return <Navigate to={"/welcome"} />;
  } else {
    return <Navigate to={"/dairy"} />;
  }
};

export default GoogleAuth;
