import { useSelector } from "react-redux";
import { selectExerciseList } from "../../../redux/exercises/selectors";
import { ExercisesItem } from "../ExercisesItem/ExercisesItem";
import css from "./ExercisesList.module.css";

export const ExercisesList = () => {
  const list = useSelector(selectExerciseList);
  return (
    <ul className={css.wrapper}>
      {list && list.map((e, i) => <ExercisesItem key={i} {...e} />)}
    </ul>
  );
};
