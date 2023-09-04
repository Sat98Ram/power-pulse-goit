import PropTypes from "prop-types";
import { useLayoutEffect, useMemo, useState } from "react";
import clsx from "clsx";

import {
  daysOfTheWeek,
  getCurrentMothDays,
  getDaysAmountInAMonth,
  getNextMonthDays,
  getPreviousMonthDays,
  isInRange,
  isToday,
  months,
} from "./utils";
import symbolDefs from "../../assets/images/symbol-defs.svg";

export const DatePickerPopupContent = ({
  selectedValue,
  inputValueDate,
  onChange,
  min,
  max,
  YearBool = false,
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
            {YearBool && (
              <button
                type="button"
                className="btn"
                data-testid="date-picker-popup-prev-year"
                onClick={prevYear}
              >
                <svg className="prevMonth" width="6" height="10">
                  <use href={symbolDefs + "#arrow-right-icon"}></use>
                </svg>
                <svg className="prevMonth" width="6" height="10">
                  <use href={symbolDefs + "#arrow-right-icon"}></use>
                </svg>
              </button>
            )}
            <button
              type="button"
              className="btn"
              data-testid="date-picker-popup-prev-month"
              onClick={prevMonth}
            >
              <svg className="prevMonth" width="6" height="10">
                <use href={symbolDefs + "#arrow-right-icon"}></use>
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
              type="button"
              className="btn"
              data-testid="date-picker-popup-next-month"
              onClick={nextMonth}
            >
              <svg className="nextMonth" width="6" height="10">
                <use href={symbolDefs + "#arrow-left-icon"}></use>
              </svg>
            </button>
            {YearBool && (
              <button
                type="button"
                className="btn"
                data-testid="date-picker-popup-next-year"
                onClick={nextYear}
              >
                <svg className="nextMonth" width="6" height="10">
                  <use href={symbolDefs + "#arrow-left-icon"}></use>
                </svg>
                <svg className="nextMonth" width="6" height="10">
                  <use href={symbolDefs + "#arrow-left-icon"}></use>
                </svg>
              </button>
            )}
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
            <button
              type="button"
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
            </button>
          );
        })}
      </div>
    </div>
  );
};

DatePickerPopupContent.propTypes = {
  selectedValue: PropTypes.any,
  inputValueDate: PropTypes.any,
  onChange: PropTypes.any,
  min: PropTypes.any,
  max: PropTypes.any,
  YearBool: PropTypes.bool,
};
