import PropTypes from "prop-types";

import css from "./SuccessModalWindow.module.css";
import symbolDefs from "../../../../assets/images/symbol-defs.svg";
import thumb from "../../../../assets/images/desktop/other@2x/thumb.png";
import { Link } from "react-router-dom";

export const SuccessExerciseModalWindow = ({ data, onClick }) => {
  return (
    <div className={css.SuccessModalWindow}>
      <div className={css.SuccessModalWindowWrap}>
        <div className={`${css.SuccessModalWindow} ${css.boxImage}`}>
          <img className={css.SuccessModalWindowImg} src={thumb} alt="thumb" />
          <p className={css.SuccessModalWindowTitle}>Well done</p>
          <p className={css.SuccessModalWindowTxt}>
            Your time:{" "}
            <span className={css.SuccessModalWindowSub}> {data.time}</span>
          </p>
          <p className={css.SuccessModalWindowTxt}>
            Burned calories:{" "}
            <span className={css.SuccessModalWindowSub}>{data.calories}</span>
          </p>
        </div>
        <Link to="/exercises" onClick={onClick}>
          <button className={css.SuccessModalWindowBtn}>Next exercise</button>
        </Link>
        <Link to="/diary" onClick={onClick}>
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

SuccessExerciseModalWindow.propTypes = {
  data: PropTypes.shape({
    time: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};
