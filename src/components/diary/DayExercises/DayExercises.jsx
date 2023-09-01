import styles from "./DayExercises.module.css";
import { nanoid } from "@reduxjs/toolkit";
const DayExercises = () => {
  const exArr = [
    {
      BodyPart: "BodyPart",
      Equipment: "Equipment",
      Name: "Name",
      Target: "aBs",
      BurnedCalories: "550",
      Time: "60",
    },
    {
      BodyPart: "BodyPart",
      Equipment: "Equipment",
      Name: "Name",
      Target: "aBs",
      BurnedCalories: "550",
      Time: "60",
    },
    {
      BodyPart: "BodyPart",
      Equipment: "Equipment",
      Name: "Name",
      Target: "aBs",
      BurnedCalories: "550",
      Time: "60",
    },
    {
      BodyPart: "BodyPart",
      Equipment: "Equipment",
      Name: "Name",
      Target: "aBs",
      BurnedCalories: "550",
      Time: "60",
    },
    {
      BodyPart: "BodyPart",
      Equipment: "Equipment",
      Name: "Name",
      Target: "aBs",
      BurnedCalories: "550",
      Time: "60",
    },
  ];
  const listOfExercises = exArr.map((obj) => {
    const num = nanoid();
    return (
      <tr key={num}>
        <td className={styles.tdBodyPart}>{obj.BodyPart}</td>
        <td className={styles.tdEquipment}>{obj.Equipment}</td>
        <td className={styles.tdName}>{obj.Name}</td>
        <td className={styles.tdTarget}>{obj.Target}</td>
        <td className={styles.tdBurnedCalories}>{obj.BurnedCalories}</td>
        <td className={styles.tdTime}>{obj.Time}</td>
        <td className={styles.tdDellete}>
          <button></button>
        </td>
      </tr>
    );
  });
  return (
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
  );
};

export default DayExercises;
