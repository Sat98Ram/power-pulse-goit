import css from "./ModalLogOut.module.css";

const ModalLogOut = () => {
  return (
    <div className={css.modalLogout}>
      <h3>Are you sure you want to logout?</h3>

      <button type="button" onClick={logout} className={css.btnModalLogout}>
        Log out
      </button>
      <button
        type="button"
        onClick={closeModal}
        className={css.btnCancelLogout}
      >
        Cancel
      </button>
    </div>
  );
};

export default ModalLogOut;
