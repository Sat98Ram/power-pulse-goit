import { NavLink } from "react-router-dom";

import css from "./UserBar.module.css";

const UserBar = () => {
  return (
    <div className={css.userBar}>
      <NavLink to="/profile">Profile</NavLink>

      <div className={css.avatarWrapper}></div>
    </div>
  );
};

export default UserBar;
