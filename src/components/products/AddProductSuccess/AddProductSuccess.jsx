import PropTypes from "prop-types";

import css from "./AddProductSuccess.module.css";
import symbolDefs from "../../../assets/images/symbol-defs.svg";
import avocado from "../../../assets/images/desktop/other@2x/avocado.png";
import { Link } from "react-router-dom";

export const AddProductSuccess = ({ calories, closeModal }) => {
  return (
    <div className={css.SuccessModalWindow}>
      <div className={css.SuccessModalWindowWrap}>
        <div className={`${css.SuccessModalWindow} ${css.boxImage}`}>
          <img
            className={css.SuccessModalWindowImg}
            src={avocado}
            alt="avocado"
          />
          <p className={css.SuccessModalWindowTitle}>Well done</p>
          <p className={css.SuccessModalWindowTxt}>
            Calories:{" "}
            <span className={css.SuccessModalWindowSub}>{calories}</span>
          </p>
        </div>
        <Link to="/products" onClick={closeModal}>
          <button className={css.SuccessModalWindowBtn}>Next product</button>
        </Link>
        <Link to="/diary" onClick={closeModal}>
          <p className={css.SuccessModalWindowTxt}>
            To the diary
            <svg className={css.arrowIcon}>
              <use href={symbolDefs + "#arrow-icon"}> </use>
            </svg>
          </p>
        </Link>
      </div>
    </div>
  );
};

AddProductSuccess.propTypes = {
  calories: PropTypes.number.isRequired,
  closeModal: PropTypes.func.isRequired,
};
