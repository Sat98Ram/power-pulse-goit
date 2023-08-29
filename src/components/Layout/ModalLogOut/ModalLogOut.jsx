import PropTypes from "prop-types";

import css from "./ModalLogOut.module.css";

const ModalLogOut = ({ logout }) => {
  return (
    <div className={css.modalLogout}>
      <h3>Are you sure you want to logout?</h3>

      <button type="button" onClick={logout} className={css.btnModalLogout}>
        Log out
      </button>
    </div>
  );
};

export default ModalLogOut;

ModalLogOut.propTypes = {
  logout: PropTypes.func,
};
