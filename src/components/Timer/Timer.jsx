import { useRef, useEffect } from "react";
import PropTypes from "prop-types";

import css from "./Timer.module.css";
import symbolDefs from "../../assets/images/symbol-defs.svg";
import Circle from "./Circle/Circle";

const Timer = ({
  burnedCalories,
  time: fullTime,
  currentTime,
  setCurrentTime,
}) => {
  const timer = useRef(null);

  useEffect(
    () => () => {
      timer.current && clearInterval(timer.current);
    },
    []
  );

  const toggleTimer = () => {
    if (timer.current) {
      clearInterval(timer.current);
      timer.current = null;
    } else {
      timer.current = setInterval(() => {
        setCurrentTime((prev) => prev - 1);
      }, 1000);
    }
  };

  const minutes = Math.floor(currentTime / 60);
  const seconds = currentTime % 60;

  const formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;

  return (
    <div className={css.timer}>
      <h1 className={css.timerTitle}>Time</h1>
      <Circle fullTime={fullTime * 60} currentTime={currentTime} />
      <p className={css.timerTime}>{formattedTime}</p>
      <button className={css.timerBtn} onClick={toggleTimer}>
        {timer.current ? (
          <svg className={css.pauseIcon}>
            <use href={symbolDefs + "#pause-square-icon"}> </use>
          </svg>
        ) : (
          <svg className={css.playIcon}>
            <use href={symbolDefs + "#play-symbol-icon"}></use>
          </svg>
        )}
      </button>
      <p className={css.timerTxt}>
        Burned calories:
        <span className={css.timerSub}> {burnedCalories}</span>
      </p>
    </div>
  );
};

export default Timer;

Timer.propTypes = {
  burnedCalories: PropTypes.number.isRequired,
  time: PropTypes.number.isRequired,
  currentTime: PropTypes.number.isRequired,
  setCurrentTime: PropTypes.func.isRequired,
};
