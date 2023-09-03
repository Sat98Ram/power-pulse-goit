import React, { useState } from "react";
import css from "./AddProductSuccess.module.css";
import symbolDefs from "../../../assets/images/symbol-defs.svg";
import avocado from "../../../assets/images/desktop/other@2x/avocado.png";

export const AddProductSuccess = () => {

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
                <span className={css.SuccessModalWindowSub}>96</span>
              </p>
            </div>
            <button className={css.SuccessModalWindowBtn}>Next product</button>
            <p className={css.SuccessModalWindowTxt}>
              To the diary
              <svg className={css.arrowIcon}>
                <use href={symbolDefs + "#arrow-icon"}> </use>
              </svg>
            </p>
          </div>
    </div>
  );
};
