import PropTypes from "prop-types";

import symbolDefs from "../../../assets/images/symbol-defs.svg";
import css from "./LogOutBtn.module.css";

const LogOutBtn = ({ onClick }) => {
  return (
    <button className={css.logoutBtn} onClick={onClick}>
      Logout
      <svg className={css.logoutIcon}>
        <use href={symbolDefs + "#log-out-icon"}></use>
      </svg>
    </button>
  );
};

export default LogOutBtn;

LogOutBtn.propTypes = {
  onClick: PropTypes.func,
};
