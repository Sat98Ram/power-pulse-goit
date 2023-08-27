import PropTypes from "prop-types";

import css from "./ExercisesSubcategoriesItem.module.css";

const ExercisesSubcategoriesItem = ({ item }) => {
  return (
    <div className={css.subcategories_item}>
      <div className={css.block}>
        <p className={css.title}>Shoulders</p>
        <p className={css.categories}>Body parts</p>
      </div>
    </div>
  );
};

export default ExercisesSubcategoriesItem;

ExercisesSubcategoriesItem.propTypes = {
  item: PropTypes.any,
};
