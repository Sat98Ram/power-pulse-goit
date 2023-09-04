import PropTypes from "prop-types";
import css from "./ParamsForm.module.css";
import { useEffect, useState } from "react";
import { DatePickerPopupContent } from "../../DatePickerCalendar/DatePickerPopupContent";

export const Calendar = ({ onChange, value }) => {
  const [showPopup, setShowPopup] = useState(false);
  console.log(showPopup);

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
      console.log("object changed");
    }
  };
  useEffect(() => {
    const onDocumentClick = (e) => {
      const element = window.calendarParams;
      if (!element) return;

      const target = e.target;
      console.log("eventfired", e);

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
          console.log("onClick");
        }}
        onKeyDown={onKeyDown}
      />
      {showPopup && (
        <DatePickerPopupContent
          selectedValue={value}
          onChange={handleChange}
          inputValueDate={value}
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
