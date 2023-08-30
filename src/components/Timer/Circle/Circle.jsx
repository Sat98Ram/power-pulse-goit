import css from "./Circle.module.css";

const Circle = ({ fullTime, currentTime }) => {
  return (
    <svg viewBox="0 0 220 220" className={css.timerProgress}>
      <circle
        className={css.timerProgressCircle}
        pathLength={fullTime}
        cx="110"
        cy="110"
        r="105"
      ></circle>
      <circle
        className={css.timerProgressCircleSec}
        pathLength={fullTime}
        cx="110"
        cy="110"
        r="105"
        strokeDasharray={fullTime}
        strokeDashoffset={fullTime - currentTime}
      ></circle>
    </svg>
  );
};

export default Circle;
