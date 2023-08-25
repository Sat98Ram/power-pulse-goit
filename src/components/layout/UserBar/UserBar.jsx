import { NavLink } from "react-router-dom";

import symbolDefs from "../../../assets/images/symbol-defs.svg";
import css from "./UserBar.module.css";
import LogOutBtn from "../LogOutBtn/LogOutBtn";

const UserBar = () => {
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

      <LogOutBtn />
    </div>
  );
};

export default UserBar;
