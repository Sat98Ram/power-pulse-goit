import PropTypes from "prop-types";

import css from "./ExercisesSubcategoriesItem.module.css";

const ExercisesSubcategoriesItem = ({ item, category }) => {
  const firstLetterToUppercase = (title) => {
    return title.replace(title[0], title[0].toUpperCase());
  };
  return (
    <li className={css.subcategories_item}>
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
};
