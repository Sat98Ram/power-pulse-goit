import PropTypes from "prop-types";
import css from "./ExercisesItem.module.css";

const texts = {
  cardLabel: "Workout",
  btnLabel: "Start",
  list: {
    burnedCalories: "Burned calories:",
    bodyPart: "Body part:",
    target: "Target:",
  },
};
export const ExercisesItem = (data) => {
  return (
    <li className={css.wrapper}>
      <div className={css.btnWrapper}>
        <p className={css.cardLabel}>{texts.cardLabel}</p>
        <button type="button" className={css.button}>
          {texts.btnLabel}
        </button>
      </div>
      <h3 className={css.title}>
        {(data.name &&
          (data.name.length > 15
            ? data.name.slice(0, 27).charAt(0).toUpperCase() +
              data.name.slice(1, 27) +
              "..."
            : data.name.charAt(0).toUpperCase() + data.name.slice(1))) ||
          "Title"}
      </h3>
      <ul className={css.list}>
        {Object.keys(texts.list).map((e) => (
          <li key={e} className={css.listItem}>
            {texts.list[e]}
            <span>{data[e]}</span>
          </li>
        ))}
      </ul>
    </li>
  );
};

ExercisesItem.propTypes = {
  target: PropTypes.string.isRequired,
  bodyPart: PropTypes.string.isRequired,
  burnedCalories: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};
