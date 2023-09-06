import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const UserNavItem = ({ link, label, className, classNameItem, setIsOpen }) => {
  return (
    <li className={classNameItem}>
      <NavLink to={link} className={className} onClick={() => setIsOpen()}>
        {label}
      </NavLink>
    </li>
  );
};

export default UserNavItem;

UserNavItem.propTypes = {
  link: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.func,
  classNameItem: PropTypes.string,
  setIsOpen: PropTypes.func,
};
