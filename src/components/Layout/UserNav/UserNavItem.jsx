import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const UserNavItem = ({ link, label, className, classNameItem }) => {
  return (
    <li className={classNameItem}>
      <NavLink to={link} className={className}>
        {label}
      </NavLink>
    </li>
  );
};

export default UserNavItem;

UserNavItem.propTypes = {
  link: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  classNameItem: PropTypes.string,
};
