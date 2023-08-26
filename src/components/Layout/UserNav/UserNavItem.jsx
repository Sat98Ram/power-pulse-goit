import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import css from "./UserNav.module.css";

const UserNavItem = ({ link, label }) => {
  return (
    <li className={css.userNavItem}>
      <NavLink to={link} className={css.userNavLink}>
        {label}
      </NavLink>
    </li>
  );
};

export default UserNavItem;

UserNavItem.propTypes = {
  link: PropTypes.string,
  label: PropTypes.string,
};
