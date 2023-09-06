import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";

import symbolDefs from "../../../assets/images/symbol-defs.svg";
import css from "./UserBar.module.css";
import LogOutBtn from "../LogOutBtn/LogOutBtn";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import UserNav from "../UserNav/UserNav";
import { selectAvatar } from "../../../redux/auth/selectors";
import { useState } from "react";

const UserBar = ({ onClick }) => {
  const userAvatar = useSelector(selectAvatar);
  const [isOpen, setIsOpen] = useState(false);
  const isDesktop = useMediaQuery({ query: "(min-width: 1440px)" });
  return (
    <div className={css.userBar}>
      <NavLink to="/profile" className={css.settingsLink}>
        <svg className={css.userSettings}>
          <use href={symbolDefs + "#settings-icon"}></use>
        </svg>
      </NavLink>

      <div className={css.avatarWrapper}>
        {!userAvatar ? (
          <svg className={css.userBarAvatar}>
            <use href={symbolDefs + "#user-icon"}></use>
          </svg>
        ) : (
          <img src={userAvatar} alt="avatar" className={css.userAvatar} />
        )}
      </div>

      {!isDesktop && (
        <BurgerMenu
          className={css.burgerMenu}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
        >
          <UserNav
            className={css.mobileNav}
            classNameItem={css.mobileNavItem}
            classNameLink={({ isActive }) =>
              isActive ? css.mobileNavLinkActive : css.mobileNavLink
            }
            setIsOpen={setIsOpen}
          />
          <LogOutBtn
            classNameBtn={css.burgerLogOut}
            className={css.mobileLogoutIcon}
            onClick={onClick}
          />
        </BurgerMenu>
      )}

      {isDesktop && <LogOutBtn onClick={onClick} className={css.logoutIcon} />}
    </div>
  );
};

export default UserBar;

UserBar.propTypes = {
  onClick: PropTypes.func,
};
