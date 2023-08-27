import symbolDefs from "../../../assets/images/symbol-defs.svg";
import css from "./LogOutBtn.module.css";

const LogOutBtn = () => {
  return (
    <button className={css.logoutBtn}>
      Logout
      <svg className={css.logoutIcon}>
        <use href={symbolDefs + "#log-out-icon"}></use>
      </svg>
    </button>
  );
};

export default LogOutBtn;
