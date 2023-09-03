import PropTypes from "prop-types";
import css from "./ExercisesItem.module.css";
import { capitalizeFirstLeter } from "@/helpers/capitalizeFirstLeter.js";
import { ExersiceModalWindow } from "../../ExersiceModalWindow/ExersiceModalWindow";
import { useState } from "react";
import BasicModalWindow from "../../BasicModalWindow/BasicModalWindow";

const texts = {
  cardLabel: "Workout",
  btnLabel: "Start",
  list: {
    burnedCalories: "Burned calories:",
    bodyPart: "Body part:",
    target: "Target:",
  },
};
export const ExercisesItem = (data) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const openModalToggle = () => {
    setIsOpenModal((prev) => !prev);
  };
  return (
    <>
      {isOpenModal && (
        <BasicModalWindow isOpenModalToggle={openModalToggle}>
          <ExersiceModalWindow data={data} openModalToggle={openModalToggle} />
        </BasicModalWindow>
      )}
      <li className={css.wrapper}>
        <div className={css.btnWrapper}>
          <p className={css.cardLabel}>{texts.cardLabel}</p>
          <button type="button" className={css.button} onClick={openModalToggle}>
            {texts.btnLabel}
          </button>
        </div>
        <h3 className={css.title}>{capitalizeFirstLeter(data.name)}</h3>
        <ul className={css.list}>
          {Object.keys(texts.list).map((e) => (
            <li key={e} className={css.listItem}>
              {texts.list[e]}
              <span className={css.listItemValue}>
                {capitalizeFirstLeter(String(data[e]))}
              </span>
            </li>
          ))}
        </ul>
      </li>
    </>
  );
};

ExercisesItem.propTypes = {
  target: PropTypes.string.isRequired,
  bodyPart: PropTypes.string.isRequired,
  burnedCalories: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};
