import PropTypes from "prop-types";
import styles from "./DayExercises.module.css";
import { nanoid } from "@reduxjs/toolkit";
import symbolDefs from "../../../assets/images/symbol-defs.svg";
import { useDispatch } from "react-redux";
import { deleteDiaryExerciseThunk } from "../../../redux/diary/operations";
import { Link } from "react-router-dom";

const DayExercises = ({ doneExercises, date }) => {
  const dispatch = useDispatch();
  dispatch;

  const handleDelete = (id) => {
    dispatch(
      deleteDiaryExerciseThunk({
        date,
        exerciseId: id,
      })
    );
  };

  const addExersicesBtn = () => {
    return (
      <Link to="/exercises" className={styles.linkExercises}>
        <p className={styles.btnAddExersisec}>
          Add exercise
          <svg className={styles.arrowIcon}>
            <use href={symbolDefs + "#arrow-icon"}></use>
          </svg>
        </p>
      </Link>
    );
  };

  const listOfExercises = doneExercises.map((obj) => {
    const num = nanoid();
    return (
      <tr key={num}>
        <td className={styles.tdBodyPart}>
          <div>{obj.exercise.bodyPart}</div>
        </td>
        <td className={styles.tdEquipment}>
          <div>{obj.exercise.equipment}</div>
        </td>
        <td className={styles.tdName}>
          <div>{obj.exercise.name}</div>
        </td>
        <td className={styles.tdTarget}>
          <div>{obj.exercise.target}</div>
        </td>
        <td className={styles.tdBurnedCalories}>
          <div>{obj.burnedCalories}</div>
        </td>
        <td className={styles.tdTime}>
          <div>{obj.time}</div>
        </td>

        <td className={styles.tdDellete}>
          <button onClick={() => handleDelete(obj._id)}>
            <svg>
              <use href={symbolDefs + "#trash-icon"}></use>
            </svg>
          </button>
        </td>
      </tr>
    );
  });
  return (
    <>
      {listOfExercises.length > 0 ? (
        <div className={styles.DayExercises}>
          <div className={styles.DayExercisesHead}>
            <h2>Exercises</h2>
            {addExersicesBtn()}
          </div>
          <div className={styles.DayExercisesTable}>
            <table>
              <thead>
                <tr>
                  <th className={styles.thBodyPart}>Body Part</th>
                  <th className={styles.thEquipment}>Equipment</th>
                  <th className={styles.thName}>Name</th>
                  <th className={styles.thTarget}>Target</th>
                  <th className={styles.thBurnedCalories}>Burned Calories</th>
                  <th className={styles.thTime}>Time</th>
                </tr>
              </thead>
              <tbody>{listOfExercises}</tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className={styles.DayExercises}>
          <div className={styles.DayExercisesHead}>
            <h2>Exercises</h2>
            {addExersicesBtn()}
          </div>
          <div className={styles.DayExercisesTable}>
            <p className={styles.not_found}>Not found exercises</p>
          </div>
        </div>
      )}
    </>
  );
};

export default DayExercises;

DayExercises.propTypes = {
  doneExercises: PropTypes.arrayOf(
    PropTypes.shape({
      exercise: PropTypes.shape({
        bodyPart: PropTypes.string,
        equipment: PropTypes.string,
        name: PropTypes.string,
        target: PropTypes.string,
        burnedCalories: PropTypes.number,
      }),
    })
  ),
  date: PropTypes.any,
  isMobile: PropTypes.bool,
};
