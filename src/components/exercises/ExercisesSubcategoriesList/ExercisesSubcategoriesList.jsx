import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import ExercisesSubcategoriesItem from "../ExercisesSubcategoriesItem/ExercisesSubcategoriesItem";
import css from "./ExercisesSubcategoriesList.module.css";

import { exerciseCategoriesThunk } from "../../../redux/exercises/operation";
import { selectExercises } from "../../../redux/exercises/selectors";

import RadioButtonPagination from "../../RadioButtonPagination/RadioButtonPagination";

const calculatePagination = (length, isTablet) => {
  const limit = isTablet ? 9 : 10;
  const page = Math.ceil(length / limit);
  return { limit, page };
};

const CategoryPage = (isTablet, listCategory, currentPage) => {
  if (!listCategory) {
    return {};
  }
  const { limit, page } = calculatePagination(listCategory.length, isTablet);

  const start = currentPage * limit - limit;
  const finish = currentPage * limit;

  return { list: listCategory.slice(start, finish), page };
};

const ExercisesSubcategoriesList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const location = useLocation();
  const category = location.pathname.split("/").pop();

  const dispatch = useDispatch();

  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1439.9 });

  const listCategory = useSelector(selectExercises);
  const currentList = listCategory[category];

  useEffect(() => {
    dispatch(exerciseCategoriesThunk());
  }, [dispatch]);

  useEffect(() => {
    setCurrentPage(1);
  }, [currentList]);

  const handleClickId = (page) => {
    setCurrentPage(page);
  };

  const { list, page } = CategoryPage(isTablet, currentList, currentPage);

  return (
    list && (
      <div className={css.SubcategoriesList}>
        <ul className={css.exercisesList}>
          {list.map((item) => (
            <ExercisesSubcategoriesItem
              key={item.title}
              item={item.title}
              category={category}
              srcSet={item.srcSet}
            />
          ))}
        </ul>

        {page > 1 && (
          <RadioButtonPagination
            handleClickId={handleClickId}
            page={page}
            currentPage={currentPage}
          />
        )}
      </div>
    )
  );
};

export default ExercisesSubcategoriesList;
