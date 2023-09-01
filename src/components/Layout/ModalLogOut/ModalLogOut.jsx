import PropTypes from "prop-types";

import symbolDefs from "../../../assets/images/symbol-defs.svg";
import css from "./ModalLogOut.module.css";

const ModalLogOut = ({ logout }) => {
  return (
    <div className={css.modalLogout}>
      <h3 className={css.logoutWarning}>Do you want to logout?</h3>

      <button type="button" onClick={logout} className={css.btnModalLogout}>
        <span>Logout</span>
        <svg className={css.modalLogoutIcon} width="20" height="20">
          <use href={symbolDefs + "#log-out-icon"}></use>
        </svg>
      </button>
    </div>
  );
};

export default ModalLogOut;

ModalLogOut.propTypes = {
  logout: PropTypes.func,
};
