import React, { useState } from "react";
import BasicModalWindow from "../../../BasicModalWindow/BasicModalWindow";
import css from "./SuccessModalWindow.module.css";
import symbolDefs from "../../../assets/images/symbol-defs.svg";
import thumb from "../../../../assets/images/thumb.svg";

export const SuccessExerciseModalWindow = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={css.SuccessModalWindow}>
        <BasicModalWindow isOpenModalToggle={closeModal}>
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
                <span className={css.SuccessModalWindowSub}> 3 minutes</span>
              </p>
              <p className={css.SuccessModalWindowTxt}>
                Burned calories:{" "}
                <span className={css.SuccessModalWindowSub}>150</span>
              </p>
            </div>
            <button className={css.SuccessModalWindowBtn}>Next exercise</button>
            <p className={css.SuccessModalWindowTxt}>
              To the diary
              <svg className={css.arrowIcon}>
                <use href={symbolDefs + "#arrow-icon"}> </use>
              </svg>
            </p>
          </div>
        </BasicModalWindow>
    </div>
  );
};
