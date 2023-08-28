import PropTypes from "prop-types";

import css from "./ExercisesSubcategoriesItem.module.css";
// import background from "../../../assets/images/desktop/excersises@1x/abs@1x.jpg";

const ExercisesSubcategoriesItem = ({ item, category, srcSet }) => {
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
      onClick={() => console.log(item)}
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
};
