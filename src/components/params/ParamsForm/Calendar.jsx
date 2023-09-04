import PropTypes from "prop-types";
import css from "./ParamsForm.module.css";
import { useEffect, useState } from "react";
import { DatePickerPopupContent } from "../../DatePickerCalendar/DatePickerPopupContent";

const date = new Date(new Date() - 18 * 365.25 * 24 * 60 * 60 * 1000);

export const Calendar = ({ onChange, value }) => {
  const [showPopup, setShowPopup] = useState(false);

  const onKeyDown = (e) => {
    if (e.key === "Enter" || e.key === "Escape") {
      setShowPopup(false);
    }
  };

  const handleChange = (e) => {
    if (e.target) {
      onChange(new Date(e.target.value));
    } else {
      onChange(e);
      setShowPopup(false);
    }
  };
  useEffect(() => {
    const onDocumentClick = (e) => {
      const element = window.calendarParams;
      if (!element) return;

      const target = e.target;

      if (!(target instanceof Node)) {
        return;
      }

      if (element.contains(target)) {
        return;
      }
      setShowPopup(false);
    };

    document.addEventListener("click", onDocumentClick);

    return () => {
      document.removeEventListener("click", onDocumentClick);
    };
  }, []);

  return (
    <div id="calendarParams" className={css.label}>
      <input
        className={css.input}
        type="date"
        required
        placeholder="Birthday"
        name="birthday"
        onChange={handleChange}
        value={value.toISOString().slice(0, 10)}
        onClick={(e) => {
          e.preventDefault();
          setShowPopup(true);
        }}
        onKeyDown={onKeyDown}
      />
      {showPopup && (
        <DatePickerPopupContent
          selectedValue={value}
          onChange={handleChange}
          inputValueDate={value}
          max={date}
          YearBool
        />
      )}
    </div>
  );
};

Calendar.propTypes = {
  value: PropTypes.any,
  onChange: PropTypes.func,
};
