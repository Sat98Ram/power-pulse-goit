import PropTypes from "prop-types";

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { clsx } from "clsx";
import {
  // DateCellItem,
  daysOfTheWeek,
  getCurrentMothDays,
  getDateFromInputValue,
  getDaysAmountInAMonth,
  getInputValueFromDate,
  getNextMonthDays,
  getPreviousMonthDays,
  isInRange,
  isToday,
  months,
} from "./utils";
import { useLatest } from "./hook.js";
import "./DatePickerCalendar.css";

// export interface DatePickerProps {
//   value: Date;
//   onChange: (value: Date) => void;
//   min?: Date;
//   max?: Date;
// }

/* 
TODO:
- fix bug [done]
- input and popup [done]
- write a date through input [done]
- refactoring [done]
- remove unnecessary chars from input [done]

- min and max [done]
- highlight input with invalid value [done]

- improve styles
  - highlight today [done]
  - highlight prev and next month days [done]
  - popup and input styles [done]

- [after video] think about solution without effects?
*/

export const DatePickerCalendar = ({ value, onChange, min, max }) => {
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
      // input value is invalid
      // reset it
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

// interface DatePickerPopupContentProps {
//   selectedValue: Date;
//   inputValueDate?: Date;
//   min?: Date;
//   max?: Date;
//   onChange: (value: Date) => void;
// }

const DatePickerPopupContent = ({
  selectedValue,
  inputValueDate,
  onChange,
  min,
  max,
}) => {
  const [panelYear, setPanelYear] = useState(() => selectedValue.getFullYear());
  const [panelMonth, setPanelMonth] = useState(() => selectedValue.getMonth());
  const todayDate = useMemo(() => new Date(), []);

  useLayoutEffect(() => {
    if (!inputValueDate) {
      return;
    }

    setPanelMonth(inputValueDate.getMonth());
    setPanelYear(inputValueDate.getFullYear());
  }, [inputValueDate]);

  const [year, month, day] = useMemo(() => {
    const currentYear = selectedValue.getFullYear();
    const currentDay = selectedValue.getDate();
    const currentMonth = selectedValue.getMonth();

    return [currentYear, currentMonth, currentDay];
  }, [selectedValue]);

  const dateCells = useMemo(() => {
    const daysInAMonth = getDaysAmountInAMonth(panelYear, panelMonth);

    const currentMonthDays = getCurrentMothDays(
      panelYear,
      panelMonth,
      daysInAMonth
    );
    const prevMonthDays = getPreviousMonthDays(panelYear, panelMonth);
    const nextMonthDays = getNextMonthDays(panelYear, panelMonth);

    return [...prevMonthDays, ...currentMonthDays, ...nextMonthDays];
  }, [panelYear, panelMonth]);

  const onDateSelect = (item) => {
    onChange(new Date(item.year, item.month, item.date));
  };

  const nextYear = () => {
    setPanelYear(panelYear + 1);
  };

  const prevYear = () => {
    setPanelYear(panelYear - 1);
  };

  const nextMonth = () => {
    if (panelMonth === 11) {
      setPanelMonth(0);
      setPanelYear(panelYear + 1);
    } else {
      setPanelMonth(panelMonth + 1);
    }
  };

  const prevMonth = () => {
    if (panelMonth === 0) {
      setPanelMonth(11);
      setPanelYear(panelYear - 1);
    } else {
      setPanelMonth(panelMonth - 1);
    }
  };

  return (
    <div className="CalendarPanel">
      <div className="CalendarPanel__header">
        <div className="CalendarPanel__buttons">
          <div className="CalendarPanel__buttons-left">
            {/* <button
              data-testid="date-picker-popup-prev-year"
              onClick={prevYear}
            >
              gg
            </button> */}
            <button
              className="btn"
              data-testid="date-picker-popup-prev-month"
              onClick={prevMonth}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="10"
                viewBox="0 0 6 10"
                fill="none"
              >
                <path
                  d="M5 9L1 5L5 1"
                  stroke="#EFEDE8"
                  // strokeOpacity="0.4"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div
            className="CalendarPanel__date"
            data-testid="date-picker-popup-month"
          >
            {months[panelMonth]} {panelYear}
          </div>
          <div className="CalendarPanel__buttons-right">
            <button
              className="btn"
              data-testid="date-picker-popup-next-month"
              onClick={nextMonth}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="10"
                viewBox="0 0 6 10"
                fill="none"
              >
                <path
                  d="M1 1L5 5L1 9"
                  stroke="#EFEDE8"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {/* <button
              data-testid="date-picker-popup-next-year"
              onClick={nextYear}
            >
              gg
            </button> */}
          </div>
        </div>
      </div>
      <div className="CalendarPanel__content">
        {daysOfTheWeek.map((weekDay) => (
          <div
            key={weekDay}
            className="CalendarPanelItem  CalendarPanelItem--forehead"
          >
            {weekDay}
          </div>
        ))}
        {dateCells.map((cell) => {
          const isSelectedDate =
            cell.year === year && cell.month === month && cell.date === day;
          const isTodayDate = isToday(cell, todayDate);
          const isNotCurrent = cell.type !== "current";

          const isDateInRange = isInRange(
            new Date(cell.year, cell.month, cell.date),
            min,
            max
          );

          return (
            <div
              className={clsx(
                "CalendarPanelItem",

                isSelectedDate && "CalendarPanelItem--selected",
                isTodayDate && "CalendarPanelItem--today",
                isNotCurrent && "CalendarPanelItem--not-current",
                !isDateInRange && "CalendarPanelItem--not-in-range"
              )}
              key={`${cell.date}-${cell.month}-${cell.year}`}
              onClick={() => isDateInRange && onDateSelect(cell)}
              data-testid="date-picker-popup-cell"
            >
              <div className="CalendarPanelItem__date">{cell.date}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

DatePickerCalendar.propTypes = {
  value: PropTypes.Date,
  onChange: PropTypes.func,
  min: PropTypes.Date | undefined,
  max: PropTypes.Date | undefined,
};
