import PropTypes from "prop-types";
import { DatePickerCalendar } from "../../DatePickerCalendar/DatePickerCalendar";
import css from "./DaySwitch.module.css";

const LeftSvg = () => {
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
        // fill="#EFEDE8"
        // fillOpacity="0.2"
      />
    </svg>
  );
};
const RigthSvg = () => {
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
        d="M5.45718 14.9572L4.04297 13.5429L9.83586 7.75005L4.04297 1.95715L5.45718 0.542938L12.6643 7.75005L5.45718 14.9572Z"
        fill="#EFEDE8"
      />
    </svg>
  );
};

const MIN_DATE = new Date(2000, 6, 1);
const MAX_DATE = new Date(2036, 8, 0);

const DaySwitch = ({ date, setDate }) => {
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
      <DatePickerCalendar
        value={date}
        onChange={setDate}
        min={MIN_DATE}
        max={MAX_DATE}
      />
      <div className={css.svg_btn_group}>
        <button className={css.btnSvg} onClick={prevData}>
          <LeftSvg />
        </button>
        <button className={css.btnSvg} onClick={nextData}>
          <RigthSvg />
        </button>
      </div>

      <div className={css.svg_position}></div>
    </div>
  );
};

export default DaySwitch;
//1693418257808
//1693418282652
DaySwitch.propTypes = {
  date: PropTypes.Date,
  setDate: PropTypes.func,
};
