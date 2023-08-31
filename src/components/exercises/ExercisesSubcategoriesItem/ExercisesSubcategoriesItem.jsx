import PropTypes from "prop-types";

import css from "./ExercisesSubcategoriesItem.module.css";
import { useDispatch } from "react-redux";
import { exerciseListThunk } from "@/redux/exercises/operation";
import { useNavigate } from "react-router-dom";
// import background from "../../../assets/images/desktop/excersises@1x/abs@1x.jpg";

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
  const navigate = useNavigate();
  const array = srcSet.split(",");

  const firstLetterToUppercase = (title) => {
    return title.replace(title[0], title[0].toUpperCase());
  };

  return (
    <li
      className={css.subcategories_item}
      style={{
        backgroundImage: `url(${array[0]})`,
      }}
      onClick={() => {
        dispatch(exerciseListThunk(getRequestBody(category, item)));
        navigate("list");
      }}
    >
      <div className={css.block}>
        <p className={css.title}>{firstLetterToUppercase(item)}</p>
        <p className={css.categories}>{firstLetterToUppercase(category)}</p>
      </div>
    </li>
  );
};

export default ExercisesSubcategoriesItem;

ExercisesSubcategoriesItem.propTypes = {
  item: PropTypes.string,
  category: PropTypes.string,
  srcSet: PropTypes.string,
};
