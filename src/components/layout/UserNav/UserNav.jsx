import { NavLink } from "react-router-dom";
import css from "./UserNav.module.css";

const UserNav = () => {
  return (
    <>
      <nav className={css.userNav}>
        <ul className={css.userNavList}>
          <li className={css.userNavItem}>
            <NavLink to="/diary" className={css.userNavLink}>
              Diary
            </NavLink>
          </li>
          <li className={css.userNavItem}>
            <NavLink to="/products" className={css.userNavLink}>
              Products
            </NavLink>
          </li>
          <li className={css.userNavItem}>
            <NavLink to="/exercises" className={css.userNavLink}>
              Exercises
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default UserNav;
