import PropTypes from "prop-types";

import css from "./ExercisesSubcategoriesItem.module.css";
import { useDispatch } from "react-redux";
import { exerciseListThunk } from "@/redux/exercises/operation";
import { NavLink, useLocation } from "react-router-dom";
import { capitalizeFirstLeter } from "@/helpers/capitalizeFirstLeter";

const getRequestBody = (category, item) => {
  const categories = {
    bodyparts: "bodypart",
    equipments: "equipment",
    muscules: "muscles",
  };
  return { [categories[category]]: item };
};

const ExercisesSubcategoriesItem = ({ item, category, srcSet }) => {
  const dispatch = useDispatch();
  const loacation = useLocation();

  return (
    <li className={css.wrapper}>
      <img srcSet={srcSet} alt={item} className={css.image} />
      <NavLink
        to="list"
        state={{ from: loacation }}
        className={css.link}
        onClick={() => {
          dispatch(exerciseListThunk(getRequestBody(category, item)));
        }}
      >
        <p className={css.title}>{capitalizeFirstLeter(item)}</p>
        <p className={css.categories}>{capitalizeFirstLeter(category)}</p>
      </NavLink>
    </li>
  );
};

export default ExercisesSubcategoriesItem;

ExercisesSubcategoriesItem.propTypes = {
  item: PropTypes.string,
  category: PropTypes.string,
  srcSet: PropTypes.string,
};
