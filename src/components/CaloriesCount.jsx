import PropTypes from "prop-types";
import symbolDefs from "../assets/images/symbol-defs.svg";
import css from "./CaloriesCount.module.css";

export const CaloriesCount = ({ className = "" }) => {
  return (
    <div className={`${css.caloriesCountBox} ${className}`}>
      <div className={css.caloriesCountBack}>
        <svg className={css.runIcon} width="17" height="17">
          <use href={symbolDefs + "#run-icon"}></use>
        </svg>
      </div>
      <div className={css.caloriesContent}>
        <p className={css.caloriesCount}>500</p>
        <p className={css.caloriesTutorial}>cal</p>
      </div>
    </div>
  );
};

export default CaloriesCount;

CaloriesCount.propTypes = {
  className: PropTypes.string,
};
