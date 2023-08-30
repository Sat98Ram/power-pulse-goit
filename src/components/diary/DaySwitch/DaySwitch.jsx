import { useState } from "react";
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

const MIN_DATE = new Date(2022, 6, 1);
const MAX_DATE = new Date(2024, 8, 0);

const DaySwitch = () => {
  // const [valueDatePicker, setValueDatePicker] = useState(new Date());
  const [date, setDate] = useState(() => new Date());
  return (
    <div className={css.date}>
      <DatePickerCalendar
        value={date}
        onChange={setDate}
        min={MIN_DATE}
        max={MAX_DATE}
      />
      <div className={css.svg_position}>
        <LeftSvg />
        <RigthSvg />
      </div>
    </div>
  );
};

export default DaySwitch;
