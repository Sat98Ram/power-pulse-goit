import { useState } from "react";
import { useSelector } from "react-redux";
import { selectExerciseList } from "../../../redux/exercises/selectors";
import { ExercisesItem } from "../ExercisesItem/ExercisesItem";
import css from "./ExercisesList.module.css";
import BasicModalWindow from "../../BasicModalWindow/BasicModalWindow";
import { ExersiceModalWindow } from "../../ExersiceModalWindow/ExersiceModalWindow";
import { SuccessExerciseModalWindow } from "../../ExersiceModalWindow/SuccessModalWindow/SuccessExerciseModalWindow/SuccessExerciseModalWindow";

export const ExercisesList = () => {
  const [modalData, setModalData] = useState(null);
  const list = useSelector(selectExerciseList);

  const openModalToggle = (el) => {
    setModalData(el);
  };

  const closeModal = () => {
    setModalData(null);
  };

  return (
    <>
      {modalData && (
        <BasicModalWindow isOpenModalToggle={closeModal}>
          {modalData.gifUrl ? (
            <ExersiceModalWindow data={modalData} onClick={openModalToggle} />
          ) : (
            <SuccessExerciseModalWindow
              closeModal={closeModal}
              data={modalData}
              onClick={closeModal}
            />
          )}
        </BasicModalWindow>
      )}
      <ul className={css.wrapper}>
        {list &&
          list.map((e, i) => (
            <ExercisesItem key={i} data={e} openModalToggle={openModalToggle} />
          ))}
      </ul>
    </>
  );
};
