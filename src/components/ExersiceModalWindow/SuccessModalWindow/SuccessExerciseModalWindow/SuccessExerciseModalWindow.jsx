import React from "react";
import css from "./SuccessModalWindow.module.css";
import symbolDefs from "../../../../assets/images/symbol-defs.svg";
import thumb from "../../../../assets/images/desktop/other@2x/thumb.png";
import { Link } from 'react-router-dom'; // Додайте імпорт

export const SuccessExerciseModalWindow = ({time, calories}) => {

  return (
    <div className={css.SuccessModalWindow}>
          <div className={css.SuccessModalWindowWrap}>
            <div className={`${css.SuccessModalWindow} ${css.boxImage}`}>
              <img
                className={css.SuccessModalWindowImg}
                src={thumb}
                alt="thumb"
              />
              <p className={css.SuccessModalWindowTitle}>Well done</p>
              <p className={css.SuccessModalWindowTxt}>
                Your time:{" "}
                <span className={css.SuccessModalWindowSub}> {time}</span>
              </p>
              <p className={css.SuccessModalWindowTxt}>
                Burned calories:{" "}
                <span className={css.SuccessModalWindowSub}>{calories}</span>
              </p>
            </div>
            <Link to="/exercise">
              <button className={css.SuccessModalWindowBtn}>Next exercise</button>
            </Link>
            <Link to="/diary">
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
