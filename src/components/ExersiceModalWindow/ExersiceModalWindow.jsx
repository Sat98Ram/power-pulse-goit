import React, { useState } from "react";
import { useDispatch } from "react-redux";
import css from "./ExersiceModalWindow.module.css";
import Timer from "../Timer/Timer";
import ExersiceModalWindowList from "./ExersiceModalWindowList/ExersiceModalWindowList";
import { addDiaryExerciseThunk } from "../../redux/diary/operations";
import { getInputValueFromDate } from "../DatePickerCalendar/utils";
import { SuccessExerciseModalWindow } from "./SuccessModalWindow/SuccessExerciseModalWindow/SuccessExerciseModalWindow";
import BasicModalWindow from "../BasicModalWindow/BasicModalWindow";

export const ExersiceModalWindow = ({ data }) => {
  const {
    bodyPart,
    burnedCalories,
    equipment,
    gifUrl,
    name,
    target,
    time,
    _id: id,
  } = data;
  const dispatch = useDispatch();
  const date = getInputValueFromDate(new Date(), true);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const openModalToggle = () => {
    setIsOpenModal((prev) => !prev);
  };
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const handleAddToDiary = () => {
    dispatch(addDiaryExerciseThunk({ date, exercise: id, time: time }))
      .then((response) => {
        setIsSuccessModalOpen(true);
      })
      .catch((error) => {
        console.error("Error adding exercise", error);
      });
    openModalToggle();
  };

  return (
    <div className={css.ExersiceModalWindow}>
      <div className={css.ExersiceModalWindowWrap}>
        <div className={`${css.ExersiceModalWindow} ${css.boxImage}`}>
          <img
            className={css.ExersiceModalWindowImg}
            src={gifUrl}
            alt="exercise"
          />
        </div>
        <div className={`${css.ExersiceModalWindowTimer} ${css.boxTimer}`}>
          <Timer burnedCalories={burnedCalories} />
        </div>
        <div className={`${css.SubcategoriesList} ${css.boxList}`}>
          <ExersiceModalWindowList
            name={name}
            bodypart={bodyPart}
            target={target}
            equipment={equipment}
            time={time}
          />
        </div>
        <div className={css.boxButton}>
          <button
            className={css.ExersiceModalWindowBtn}
            type="button"
            onClick={handleAddToDiary}
          >
            Add to diary
          </button>
          {isOpenModal && (
            <BasicModalWindow isOpenModalToggle={openModalToggle}>
              {isSuccessModalOpen && (
                <SuccessExerciseModalWindow
                  time={time}
                  calories={burnedCalories}
                />
              )}
            </BasicModalWindow>
          )}
        </div>
      </div>
    </div>
  );
};
