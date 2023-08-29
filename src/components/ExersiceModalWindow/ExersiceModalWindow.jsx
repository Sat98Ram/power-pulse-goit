import React, { useState } from "react";
import BasicModalWindow from "../BasicModalWindow/BasicModalWindow";
import exercise from "../../assets/images/desktop/excersises@2x/waist@2x.jpg";
import css from "./ExersiceModalWindow.module.css";
import Timer from "../Timer/Timer";

export const ExersiceModalWindow = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={css.ExersiceModalWindow}>
      <button onClick={openModal}>Відкрити модальне вікно</button>
      {isModalOpen && (
        <BasicModalWindow isOpenModalToggle={closeModal}>
          <div className={css.ExersiceModalWindowWrap}>
            <div className={css.ExersiceModalWindow}>
              <img
                className={css.ExersiceModalWindowImg}
                src={exercise}
                alt="exercise"
              />
              <ul className={css.ExersiceModalWindowList}>
                <li className={css.ExersiceModalWindowLink}>
                  <p className={css.ExersiceModalWindowLinkSub}>Name</p>
                  <p className={css.ExersiceModalWindowLinkTitle}>Air bake</p>
                </li>
                <li className={css.ExersiceModalWindowLink}>
                  <p className={css.ExersiceModalWindowLinkSub}>Target</p>
                  <p className={css.ExersiceModalWindowLinkTitle}>Abs</p>
                </li>
                <li className={css.ExersiceModalWindowLink}>
                  <p className={css.ExersiceModalWindowLinkSub}>Body Part</p>
                  <p className={css.ExersiceModalWindowLinkTitle}>Waist</p>
                </li>
                <li className={css.ExersiceModalWindowLink}>
                  <p className={css.ExersiceModalWindowLinkSub}>Equipment</p>
                  <p className={css.ExersiceModalWindowLinkTitle}>
                    Body weight
                  </p>
                </li>
                <li className={css.ExersiceModalWindowLink}>
                  <p className={css.ExersiceModalWindowLinkSub}>Time</p>
                  <p className={css.ExersiceModalWindowLinkTitle}>3 minutes</p>
                </li>
              </ul>
            </div>
            <div className={css.ExersiceModalWindowTimer}>
              <Timer />
              <button className={css.ExersiceModalWindowBtn}>
                Add to diary
              </button>
            </div>
          </div>
        </BasicModalWindow>
      )}
    </div>
  );
};
