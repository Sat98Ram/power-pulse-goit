import PropTypes from "prop-types";

import symbolDefs from "../../../assets/images/symbol-defs.svg";
import css from "./LogOutBtn.module.css";

const LogOutBtn = ({ onClick, className, classNameBtn }) => {
  return (
    <button className={`${classNameBtn} ${css.logoutBtn}`} onClick={onClick}>
      Logout
      <svg className={className} width="20" height="20">
        <use href={symbolDefs + "#log-out-icon"}></use>
      </svg>
    </button>
  );
};

export default LogOutBtn;

LogOutBtn.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  classNameBtn: PropTypes.string,
};
