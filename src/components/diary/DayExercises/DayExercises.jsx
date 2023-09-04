import PropTypes from "prop-types";
import styles from "./DayExercises.module.css";
import { nanoid } from "@reduxjs/toolkit";
import symbolDefs from "../../../assets/images/symbol-defs.svg"

const DayExercises = ({ doneExercises }) => {
   
  const listOfExercises = doneExercises.map((obj) => {
    const num = nanoid();
    return (
      <tr key={num}>
        <td className={styles.tdBodyPart}>{obj.exercise.bodyPart}</td>
        <td className={styles.tdEquipment}>{obj.exercise.equipment}</td>
        <td className={styles.tdName}>{obj.exercise.name}</td>
        <td className={styles.tdTarget}>{obj.exercise.target}</td>
        <td className={styles.tdBurnedCalories}>{obj.exercise.burnedCalories}</td>
        <td className={styles.tdTime}>{obj.exercise.time}</td>
        <td className={styles.tdDellete}>
          <button><svg><use href={symbolDefs + "#trash-icon"}></use></svg></button>
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
      <p>Add exercise</p>
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
        <p>Add exercise</p>
      </div>
      <div className={styles.DayExercisesTable}>
        <p className={styles.not_found}>Not found exercises</p>
      </div>
    </div>
    
  )}
    </>
  )
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
};