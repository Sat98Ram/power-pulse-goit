import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import ExercisesSubcategoriesItem from "../ExercisesSubcategoriesItem/ExercisesSubcategoriesItem";
import css from "./ExercisesSubcategoriesList.module.css";
import Pagination from "../../Pagination/Pagination";

const data = [
  "back",
  "cardio",
  "chest",
  "lower arms",
  "lower legs",
  "neck",
  "shoulders",
  "upper arms",
  "upper legs",
  "waist",
];

const ExercisesSubcategoriesList = () => {
  const [listCategory, setListCategory] = useState(null);
  const [isDevice, setIsDevice] = useState(null);
  const [isLimit, setLimit] = useState(null);
  const [isPage, setIsPage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const location = useLocation();
  const arrayLocation = location.pathname.split("/");
  const category = arrayLocation[arrayLocation.length - 1];

  const mobile = useMediaQuery({ maxWidth: 767.9 });
  const tablet = useMediaQuery({ minWidth: 768, maxWidth: 1439.9 });
  const desktop = useMediaQuery({ minWidth: 1440 });

  useEffect(() => {
    setListCategory(data);
  }, []);

  useEffect(() => {
    const Devise = () => {
      if (mobile) {
        return "mobile";
      }
      if (tablet) {
        return "tablet";
      }
      if (desktop) {
        return "desktop";
      }
    };
    setIsDevice(Devise());
  }, [mobile, tablet, desktop]);

  useEffect(() => {
    const limit = {
      mobile: 10,
      tablet: 9,
      desktop: 10,
    };

    setLimit(limit[isDevice]);
  }, [isDevice]);

  useEffect(() => {
    const reternMathPage = (number) => {
      setIsPage(Math.ceil(number / isLimit));
    };
    reternMathPage(listCategory?.length);
  }, [isLimit, listCategory]);

  const handleClickId = (page) => {
    setCurrentPage(page);
  };

  const CategoryPage = (page, limit) => {
    const start = page * limit - limit;
    const finish = page * limit;
    return listCategory?.slice(start, finish);
  };
  const isCategoryPage = CategoryPage(currentPage, isLimit);

  return (
    listCategory && (
      <div className={css.SubcategoriesList}>
        <ul className={css.exercisesList}>
          {isCategoryPage.map((item) => (
            <ExercisesSubcategoriesItem
              key={item}
              item={item}
              category={category}
            />
          ))}
        </ul>
        {isPage > 1 && (
          <Pagination handleClickId={handleClickId} page={isPage} />
        )}
      </div>
    )
  );
};

export default ExercisesSubcategoriesList;
