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
    bodyPart: "waist",
    burnedCalories: 157,
    equipment: "body weight",
    gifUrl:
      "https://res.cloudinary.com/ditdqzoio/image/upload/v1687127066/exercises/0260.gif",
    name: "cocoons",
    target: "abs",
    time: 3,
    _id: "64e5d7a0bc1733080d784422",
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
            <div className={`${css.ExersiceModalWindow} ${css.boxImage}`}>
              <img
                className={css.ExersiceModalWindowImg}
                src={params.gifUrl}
                alt="exercise"
              />
            </div>
            <div className={`${css.ExersiceModalWindowTimer} ${css.boxTimer}`}>
              <Timer burnedCalories={params.burnedCalories} />
            </div>
            <div className={`${css.SubcategoriesList} ${css.boxList}`}>
              <ExersiceModalWindowList
                name={params.name}
                bodypart={params.bodyPart}
                target={params.target}
                equipment={params.equipment}
                time={params.time}
              />
            </div>
            <div className={css.boxButton}>
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
