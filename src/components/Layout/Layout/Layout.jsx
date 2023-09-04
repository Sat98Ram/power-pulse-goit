import Header from "../Header/Header";
import VideoCount from "../../VideoCount";
import CaloriesCount from "../../CaloriesCount";
import { Outlet } from "react-router-dom";
import css from "./Layout.module.css";
import { useSelector } from "react-redux";
import { selectIsAuth } from "../../../redux/auth/selectors";
export const Layout = () => {
  const isAuth = useSelector(selectIsAuth);

  return (
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
  );
};

export default Layout;
