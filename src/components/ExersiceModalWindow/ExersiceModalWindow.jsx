import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

import css from "./ExersiceModalWindow.module.css";
import Timer from "../Timer/Timer";
import ExersiceModalWindowList from "./ExersiceModalWindowList/ExersiceModalWindowList";
import { addDiaryExerciseThunk } from "../../redux/diary/operations";
import { getInputValueFromDate } from "../DatePickerCalendar/utils";

export const ExersiceModalWindow = ({ data, onClick }) => {
  const {
    bodyPart,
    burnedCalories,
    equipment,
    gifUrl,
    name,
    target,
    time,
    _id: exercise,
  } = data;
  const dispatch = useDispatch();

  const [currentTime, setCurrentTime] = useState(180);

  const calories = Math.floor((currentTime / 60) * (burnedCalories / time));

  const handleAddToDiary = () => {
    const date = getInputValueFromDate(new Date(), true);
    if (currentTime === 180) {
      toast.error("Nothing to add");
      return;
    }
    const time = Math.round((180 - currentTime) / 6) / 10;
    dispatch(addDiaryExerciseThunk({ date, exercise, time, data }))
      .then(() => {
        onClick({ time, calories });
      })
      .catch((error) => {
        toast.error("Error adding exercise", error);
      });
  };

  return (
    <div className={css.ExersiceModalWindow}>
      <div className={css.ExersiceModalWindowWrap}>
        <div className={`${css.ExersiceModalWindow} ${css.boxImage}`}>
          <img
            className={css.ExersiceModalWindowImg}
            src={gifUrl}
            alt="exercise"
          />
        </div>
        <div className={`${css.ExersiceModalWindowTimer} ${css.boxTimer}`}>
          <Timer
            burnedCalories={burnedCalories}
            currentTime={currentTime}
            setCurrentTime={setCurrentTime}
            time={time}
          />
        </div>
        <div className={`${css.SubcategoriesList} ${css.boxList}`}>
          <ExersiceModalWindowList
            name={name}
            bodypart={bodyPart}
            target={target}
            equipment={equipment}
            time={time}
          />
        </div>
        <div className={css.boxButton}>
          <button
            className={css.ExersiceModalWindowBtn}
            type="button"
            onClick={handleAddToDiary}
          >
            Add to diary
          </button>
        </div>
      </div>
    </div>
  );
};

ExersiceModalWindow.propTypes = {
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
  onClick: PropTypes.func.isRequired,
};
