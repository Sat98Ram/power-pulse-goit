import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";

import { logoutThunk } from "../../../redux/auth/operations";
import { useDispatch } from "react-redux";
import symbolDefs from "../../../assets/images/symbol-defs.svg";
import css from "./UserBar.module.css";
import LogOutBtn from "../LogOutBtn/LogOutBtn";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import UserNav from "../UserNav/UserNav";
import BasicModalWindow from "../../BasicModalWindow/BasicModalWindow";
import ModalLogOut from "../ModalLogOut/ModalLogOut";

const UserBar = ({ onClick }) => {
  const [isModalLogout, setIsModalLogout] = useState(false);
  const dispatch = useDispatch();

  const showModalLogOut = () => {
    setIsModalLogout((prev) => !prev);
  };

  const handleLogOut = () => {
    dispatch(logoutThunk());

    showModalLogOut();
  };

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
          <LogOutBtn classNameBtn={css.burgerLogOut} />
        </BurgerMenu>
      )}
      {isModalLogout && (
        <BasicModalWindow isOpenModalToggle={showModalLogOut}>
          <ModalLogOut logout={handleLogOut} />
        </BasicModalWindow>
      )}

      {isDesktop && <LogOutBtn onClick={onClick} className={css.logoutBtn} />}
    </div>
  );
};

export default UserBar;

UserBar.propTypes = {
  onClick: PropTypes.func,
};
