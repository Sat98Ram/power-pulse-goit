import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import { selectIsAuth, selectisLoading } from "../../../redux/auth/selectors";
import Header from "../Header/Header";
import VideoCount from "../../VideoCount";
import CaloriesCount from "../../CaloriesCount";
import Loader from "../../Loader/Loader";
import css from "./Layout.module.css";

export const Layout = () => {
  const isAuth = useSelector(selectIsAuth);
  const isLoading = useSelector(selectisLoading);

  return (
    <>
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <>
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
