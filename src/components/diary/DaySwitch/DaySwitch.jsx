import PropTypes from "prop-types";
import { DatePickerCalendar } from "../../DatePickerCalendar/DatePickerCalendar";
import symbolDefs from "../../../assets/images/symbol-defs.svg";
import css from "./DaySwitch.module.css";
import { getInputValueFromDate } from "../../DatePickerCalendar/utils";

const LeftSvg = ({ opacity = "1" }) => {
  return (
    <svg
      className={css.svg}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.5428 0.542847L11.957 1.95706L6.16414 7.74995L11.957 13.5428L10.5428 14.9571L3.33571 7.74995L10.5428 0.542847Z"
        fillOpacity={opacity}
      />
    </svg>
  );
};
const RigthSvg = ({ opacity = "1" }) => {
  return (
    <svg
      className={css.svg}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      fillOpacity={opacity}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.45718 14.9572L4.04297 13.5429L9.83586 7.75005L4.04297 1.95715L5.45718 0.542938L12.6643 7.75005L5.45718 14.9572Z"
        fill="#EFEDE8"
      />
    </svg>
  );
};

const DaySwitch = ({ date, setDate, minDate }) => {
  const MIN_DATE = new Date(minDate);
  const MAX_DATE = new Date();

  const prevData = () => {
    var d = new Date(date);
    d = new Date(d.getTime() - 86400000);
    setDate(new Date(d));
  };
  const nextData = () => {
    var d = new Date(date);
    d = new Date(d.getTime() + 86400000);
    setDate(new Date(d));
  };

  return (
    <div className={css.date}>
      <div className={css.data_picker}>
        <DatePickerCalendar
          value={date}
          onChange={setDate}
          min={MIN_DATE}
          max={MAX_DATE}
        />
        <svg className={css.colorSvg} width="20" height="20">
          <use href={symbolDefs + "#calendar-icon"}></use>
        </svg>
      </div>

      <div className={css.svg_btn_group}>
        <button
          className={css.btnSvg}
          onClick={prevData}
          disabled={
            MIN_DATE >= date ||
            getInputValueFromDate(date) === getInputValueFromDate(MIN_DATE)
          }
        >
          <LeftSvg
            opacity={
              MIN_DATE > date ||
              getInputValueFromDate(date) === getInputValueFromDate(MIN_DATE)
                ? "0.4"
                : "1"
            }
          />
        </button>
        <button
          className={css.btnSvg}
          onClick={nextData}
          disabled={
            +date >= +MAX_DATE ||
            getInputValueFromDate(date) === getInputValueFromDate(MAX_DATE)
          }
        >
          <RigthSvg
            opacity={
              +date >= +MAX_DATE ||
              getInputValueFromDate(date) === getInputValueFromDate(MAX_DATE)
                ? "0.4"
                : "1"
            }
          />
        </button>
      </div>
    </div>
  );
};

export default DaySwitch;

DaySwitch.propTypes = {
  date: PropTypes.any,
  setDate: PropTypes.func,
  minDate: PropTypes.any,
  opacity: PropTypes.string,
};

RigthSvg.propTypes = {
  opacity: PropTypes.string,
};
LeftSvg.propTypes = {
  opacity: PropTypes.string,
};
