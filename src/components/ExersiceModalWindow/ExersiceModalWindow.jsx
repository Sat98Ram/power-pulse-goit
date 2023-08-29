import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import BasicModalWindow from "../BasicModalWindow/BasicModalWindow";
import css from "./ExersiceModalWindow.module.css";
import Timer from "../Timer/Timer";
// import { exerciseListThunk } from "../../redux/exercises/operation";
// import { selectExerciseList } from "../../redux/exercises/selectors";
import ExersiceModalWindowList from "./ExersiceModalWindowList/ExersiceModalWindowList";

export const ExersiceModalWindow = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const params = {
    bodyPart: "back",
    burnedCalories: 307,
    equipment: "barbell",
    gifUrl:
      "https://res.cloudinary.com/ditdqzoio/image/upload/v1687127066/exercises/0037.gif",
    name: "barbell decline",
    target: "lats",
    time: 3,
    _id: "64e5d7a0bc1733080d78435f",
  };
  // const dispatch = useDispatch();

  // const exercises = useSelector(selectExerciseList);
  // console.log(exercises);

  // useEffect(() => {
  //   dispatch(exerciseListThunk());
  // }, [dispatch]);

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
                src={params.gifUrl}
                alt="exercise"
              />
              <div className={css.SubcategoriesList}>
                <ExersiceModalWindowList name={params.name} bodypart={params.bodyPart} target={params.target} equipment={params.equipment} time={params.time} />
              </div>
            </div>
            <div className={css.ExersiceModalWindowTimer}>
              <Timer burnedCalories={params.burnedCalories} />
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
