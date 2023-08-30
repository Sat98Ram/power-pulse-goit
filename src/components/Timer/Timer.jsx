import React, { useState, useEffect } from "react";
import css from "./Timer.module.css";
import symbolDefs from "../../assets/images/symbol-defs.svg";
import Circle from "./Circle/Circle";

const Timer = ({burnedCalories}) => {
  const [fullTime, setFullTime] = useState(180);
  const [currentTime, setCurrentTime] = useState(180);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      if (currentTime === 0) {
        setIsRunning(false);
      } else {
        timer = setInterval(() => {
          setCurrentTime(currentTime - 1);
        }, 1000);
      }
    }
    return () => clearInterval(timer);
  }, [isRunning, currentTime]);

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const minutes = Math.floor(currentTime / 60);
  const seconds = currentTime % 60;

  const formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

  return (
    <div className={css.timer}>
      <h1 className={css.timerTitle}>Time</h1>
      <Circle fullTime={fullTime} currentTime={currentTime} />
      <p className={css.timerTime}>{formattedTime}</p>
      <button className={css.timerBtn} onClick={toggleTimer}>
        {isRunning ? (
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
