import { useLocation } from "react-router-dom";
import ExercisesSubcategoriesItem from "../ExercisesSubcategoriesItem/ExercisesSubcategoriesItem";
import css from "./ExercisesSubcategoriesList.module.css";

const ExercisesSubcategoriesList = () => {
  const location = useLocation();
  const loc = location.pathname.split("/");
  console.log("location: ", loc[loc.length - 1]);
  return (
    <div className={css.SubcategoriesList}>
      <ExercisesSubcategoriesItem />
    </div>
  );
};

export default ExercisesSubcategoriesList;
