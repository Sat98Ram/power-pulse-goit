import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import { selectIsAuth, selectisLoading } from "../../../redux/auth/selectors";
import css from "./Layout.module.css";
import Header from "../Header/Header";
import VideoCount from "../../VideoCount";
import CaloriesCount from "../../CaloriesCount";
import Loader from "../../Loader/Loader";

export const Layout = () => {
  const isAuth = useSelector(selectIsAuth);
  const isLoading = useSelector(selectisLoading);

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <Header />

          <Outlet />
          {!isAuth && (
            <div className={css.statLine}>
              <VideoCount />
              <CaloriesCount />
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Layout;
