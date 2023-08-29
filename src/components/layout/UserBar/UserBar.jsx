import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import symbolDefs from "../../../assets/images/symbol-defs.svg";
import css from "./UserBar.module.css";
import LogOutBtn from "../LogOutBtn/LogOutBtn";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

const UserBar = ({ onClick }) => {
  const isDesktop = useMediaQuery({ query: "(min-width: 1440px)" });
  return (
    <div className={css.userBar}>
      <NavLink to="/profile" className={css.settingsLink}>
        <svg className={css.userSettings}>
          <use href={symbolDefs + "#settings-icon"}></use>
        </svg>
      </NavLink>

      <div className={css.avatarWrapper}>
        <svg className={css.userBarAvatar}>
          <use href={symbolDefs + "#user-icon"}></use>
        </svg>
      </div>

      {!isDesktop && (
        <BurgerMenu />
        // <svg className={css.burgerIcon}>
        //   <use href={symbolDefs + "#burger-menu-icon"}></use>
        // </svg>
      )}

      {isDesktop && <LogOutBtn onClick={onClick} />}
    </div>
  );
};

export default UserBar;

UserBar.propTypes = {
  onClick: PropTypes.func,
};
