import PropTypes from "prop-types";
import Header from "../Header/Header";
import VideoCount from "../../VideoCount";
import CaloriesCount from "../../CaloriesCount";
import { Outlet, useLocation } from "react-router-dom";
import css from "./Layout.module.css";
export const Layout = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div>
      <Header />
      {(currentPath === "/welcome" ||
        currentPath === "/signup" ||
        currentPath === "/signin") && (
        <div className={css.buttonLine}>
          <VideoCount />
          <CaloriesCount />
        </div>
      )}

      <Outlet />
    </div>
  );
};

Layout.propTypes = {
  path: PropTypes.string,
  children: PropTypes.node,
};

export default Layout;
