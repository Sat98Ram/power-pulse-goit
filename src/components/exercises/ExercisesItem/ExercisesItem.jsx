import PropTypes from "prop-types";
import css from "./ExercisesItem.module.css";
import { capitalizeFirstLeter } from "@/helpers/capitalizeFirstLeter.js";

const texts = {
  cardLabel: "Workout",
  btnLabel: "Start",
  list: {
    burnedCalories: "Burned calories:",
    bodyPart: "Body part:",
    target: "Target:",
  },
};
export const ExercisesItem = ({ data, openModalToggle }) => {
  return (
    <li className={css.wrapper}>
      <div className={css.btnWrapper}>
        <p className={css.cardLabel}>{texts.cardLabel}</p>
        <button
          type="button"
          className={css.button}
          onClick={() => openModalToggle(data)}
        >
          {texts.btnLabel}
        </button>
      </div>
      <h3 className={css.title}>{capitalizeFirstLeter(data.name)}</h3>
      <ul className={css.list}>
        {Object.keys(texts.list).map((e) => (
          <li key={e} className={css.listItem}>
            {texts.list[e]}
            <span className={css.listItemValue}>
              {capitalizeFirstLeter(String(data[e]))}
            </span>
          </li>
        ))}
      </ul>
    </li>
  );
};

ExercisesItem.propTypes = {
  data: PropTypes.shape({
    bodyPart: PropTypes.string.isRequired,
    burnedCalories: PropTypes.number.isRequired,
    equipment: PropTypes.string.isRequired,
    gifUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    target: PropTypes.string.isRequired,
    time: PropTypes.number.isRequired,
    _id: PropTypes.string.isRequired,
  }).isRequired,
  openModalToggle: PropTypes.func.isRequired,
};
