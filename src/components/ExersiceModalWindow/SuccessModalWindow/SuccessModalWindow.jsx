import React, { useState } from "react";
import BasicModalWindow from "../../BasicModalWindow/BasicModalWindow";
import css from "./SuccessModalWindow.module.css";
import symbolDefs from "../../../assets/images/symbol-defs.svg";
// import thumb from "../../"

export const SuccessModalWindow = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={css.SuccessModalWindow}>
      <button onClick={openModal}>Відкрити модальне вікно</button>
      {isModalOpen && (
        <BasicModalWindow isOpenModalToggle={closeModal}>
          <div className={css.SuccessModalWindowWrap}>
            <div className={`${css.SuccessModalWindow} ${css.boxImage}`}>
              <svg className={css.playIcon}>
                <use href={symbolDefs + "#apple-icon"}></use>
              </svg>
            </div>
            <div className={css.boxButton}>
              <button className={css.SuccessModalWindowBtn}>
                Add to diary
              </button>
            </div>
          </div>
        </BasicModalWindow>
      )}
    </div>
  );
};
