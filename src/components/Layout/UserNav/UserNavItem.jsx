import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const UserNavItem = ({ link, label, className, classNameItem, setIsOpen }) => {
  const isDesktop = useMediaQuery({ query: "(min-width: 1440px)" });
  return (
    <li className={classNameItem}>
      <NavLink
        to={link}
        className={className}
        onClick={isDesktop ? () => setIsOpen() : null}
      >
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
