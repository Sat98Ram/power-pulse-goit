import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import symbolDefs from "../../../assets/images/symbol-defs.svg";
import css from "./UserBar.module.css";
import LogOutBtn from "../LogOutBtn/LogOutBtn";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import UserNav from "../UserNav/UserNav";

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
        <BurgerMenu className={css.burgerMenu}>
          <UserNav
            className={css.mobileNav}
            classNameItem={css.mobileNavItem}
            classNameLink={({ isActive }) =>
              isActive ? css.mobileNavLinkActive : css.mobileNavLink
            }
          />
          <LogOutBtn classNameBtn={css.burgerLogOut} onClick={onClick} />
        </BurgerMenu>
      )}

      {isDesktop && <LogOutBtn onClick={onClick} className={css.logoutBtn} />}
    </div>
  );
};

export default UserBar;

UserBar.propTypes = {
  onClick: PropTypes.func,
};
