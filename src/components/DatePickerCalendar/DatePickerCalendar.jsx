import PropTypes from "prop-types";

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { clsx } from "clsx";
import {
  getDateFromInputValue,
  getInputValueFromDate,
  isInRange,
} from "./utils";
import { useLatest } from "./hook.js";
import "./DatePickerCalendar.css";
import { DatePickerPopupContent } from "./DatePickerPopupContent";

export const DatePickerCalendar = ({
  value = new Date(),
  onChange,
  min,
  max,
}) => {
  const [showPopup, setShowPopup] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const elementRef = useRef(null);

  useLayoutEffect(() => {
    setInputValue(getInputValueFromDate(value));
  }, [value]);

  const updateValueOnPopupCloseAction = () => {
    const date = getDateFromInputValue(inputValue);

    setShowPopup(false);

    if (!date) {
      setInputValue(getInputValueFromDate(value));
      return;
    }

    const isDateInRange = isInRange(date, min, max);

    if (!isDateInRange) {
      return;
    }

    onChange(date);
  };

  const latestUpdateValueFromInput = useLatest(updateValueOnPopupCloseAction);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    const onDocumentClick = (e) => {
      const target = e.target;

      if (!(target instanceof Node)) {
        return;
      }

      if (element.contains(target)) {
        return;
      }

      latestUpdateValueFromInput.current();
    };

    document.addEventListener("click", onDocumentClick);

    return () => {
      document.removeEventListener("click", onDocumentClick);
    };
  }, [latestUpdateValueFromInput]);

  const handleChange = (value) => {
    onChange(value);
    setShowPopup(false);
  };

  const onInputValueChange = (e) => {
    setInputValue(e.target.value.trim());
  };

  const onInputClick = () => {
    setShowPopup(true);
  };

  const [inputValueDate, isValidInputValue] = useMemo(() => {
    const date = getDateFromInputValue(inputValue);

    if (!date) {
      return [undefined, false];
    }

    const isDateInRange = isInRange(date, min, max);

    return [date, isDateInRange];
  }, [inputValue, min, max]);

  const onKeyDown = (e) => {
    if (e.key !== "Enter") {
      return;
    }

    updateValueOnPopupCloseAction();
  };

  return (
    <div ref={elementRef} className="DatePicker" data-testid="data-picker-view">
      <input
        data-testid="date-picker-input"
        className={clsx(
          "DatePicker__input",
          !isValidInputValue && "DatePicker__input--invalid"
        )}
        value={inputValue}
        onChange={onInputValueChange}
        type="text"
        onClick={onInputClick}
        onKeyDown={onKeyDown}
      />

      {showPopup && (
        <div className="DatePicker__popup" data-testid="date-picker-popup">
          <DatePickerPopupContent
            selectedValue={value}
            onChange={handleChange}
            min={min}
            max={max}
            inputValueDate={inputValueDate}
          />
        </div>
      )}
    </div>
  );
};

DatePickerCalendar.propTypes = {
  value: PropTypes.any,
  onChange: PropTypes.any,
  min: PropTypes.any,
  max: PropTypes.any,
  YearBool: PropTypes.bool,
};
