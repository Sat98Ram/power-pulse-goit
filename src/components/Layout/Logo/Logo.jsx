import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import symbolDefs from "../../../assets/images/symbol-defs.svg";
import css from "./Logo.module.css";

const Logo = ({ className }) => {
  return (
    <NavLink to="/diary" className={css.logoLink}>
      <svg className={`${className}  ${css.logoIcon}`}>
        <use href={symbolDefs + "#gantelya"}></use>
      </svg>
      <svg className={css.iconText}>
        <use href={symbolDefs + "#power-pulse"}></use>
      </svg>
    </NavLink>
  );
};

export default Logo;

Logo.propTypes = {
  className: PropTypes.string,
};
