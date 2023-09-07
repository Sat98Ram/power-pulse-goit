import PropTypes from "prop-types";

export const daysOfTheWeek = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
export const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const VISIBLE_CELLS_AMOUNT = 7 * 6;
const sundayWeekToMondayWeekDayMap = {
  0: 6,
  1: 0,
  2: 1,
  3: 2,
  4: 3,
  5: 4,
  6: 5,
};


export const getDaysAmountInAMonth = (year, month) => {
  const nextMonthDate = new Date(year, month + 1, 1);
  nextMonthDate.setMinutes(-1);
  return nextMonthDate.getDate();
};

const getDayOfTheWeek = (date) => {
  const day = date.getDay();

  return sundayWeekToMondayWeekDayMap[day];
};

export const getPreviousMonthDays = (year, month) => {
  const currentMonthFirstDay = new Date(year, month, 1);
  const prevMonthCellsAmount = getDayOfTheWeek(currentMonthFirstDay);

  const daysAmountInPrevMonth = getDaysAmountInAMonth(year, month - 1);

  const dateCells = [];

  const [cellYear, cellMonth] =
    month === 0 ? [year - 1, 11] : [year, month - 1];

  for (let i = prevMonthCellsAmount - 1; i >= 0; i--) {
    dateCells.push({
      year: cellYear,
      month: cellMonth,
      date: daysAmountInPrevMonth - i,
      type: "prev",
    });
  }

  return dateCells;
};

export const getNextMonthDays = (year, month) => {
  const currentMonthFirstDay = new Date(year, month, 1);
  const prevMonthCellsAmount = getDayOfTheWeek(currentMonthFirstDay);

  const daysAmount = getDaysAmountInAMonth(year, month);

  const nextMonthDays =
    VISIBLE_CELLS_AMOUNT - daysAmount - prevMonthCellsAmount;

  const [cellYear, cellMonth] =
    month === 11 ? [year + 1, 0] : [year, month + 1];

  const dateCells = [];

  for (let i = 1; i <= nextMonthDays; i++) {
    dateCells.push({
      year: cellYear,
      month: cellMonth,
      date: i,
      type: "next",
    });
  }

  return dateCells;
};

export const getCurrentMothDays = (year, month, numberOfDays) => {
  const dateCells = [];

  for (let i = 1; i <= numberOfDays; i++) {
    dateCells.push({
      year,
      month,
      date: i,
      type: "current",
    });
  }

  return dateCells;
};

const addLeadingZeroIfNeeded = (value) => {
  if (value > 9) {
    return value.toString();
  }

  return `0${value}`;
};

export const getInputValueFromDate = (value, form = null) => {
  const date = addLeadingZeroIfNeeded(value.getDate());
  const month = addLeadingZeroIfNeeded(value.getMonth() + 1);
  const year = value.getFullYear();

  if (form) {
    return `${date}-${month}-${year}`;
  }
  return `${date}/${month}/${year}`;
};

export const getDateFromInputValue = (inputValue) => {
  if (!isValidDateString(inputValue)) {
    return;
  }

  const [date, month, year] = inputValue.split("-").map((v) => parseInt(v, 10));

  const dateObj = new Date(year, month - 1, date);

  return dateObj;
};

const validValueRegex = /^\d{2}-\d{2}-\d{4}$/;
export const isValidDateString = (value) => {
  if (!validValueRegex.test(value)) {
    return false;
  }
  const [date, month, year] = value.split("-").map((v) => parseInt(v, 10));

  if (month < 1 || month > 12 || date < 1) {
    return false;
  }

  const maxDaysInAMonth = getDaysAmountInAMonth(year, month - 1);

  if (date > maxDaysInAMonth) {
    return false;
  }

  return true;
};

export function isToday(cell, todayDate) {
  return (
    todayDate.getFullYear() === cell.year &&
    todayDate.getMonth() === cell.month &&
    todayDate.getDate() === cell.date
  );
}

export function isInRange(value, min = undefined, max = undefined) {
  if (min && max) {
    return isSmallerThanDate(value, max) && isBiggerThanDate(value, min);
  }

  if (min) {
    return isBiggerThanDate(value, min);
  }

  if (max) {
    return isSmallerThanDate(value, max);
  }

  return true;
}

function isBiggerThanDate(value, date) {
  if (value.getFullYear() > date.getFullYear()) {
    return true;
  }

  if (value.getFullYear() < date.getFullYear()) {
    return false;
  }

  if (value.getMonth() > date.getMonth()) {
    return true;
  }

  if (value.getMonth() < date.getMonth()) {
    return false;
  }

  return value.getDate() >= date.getDate();
}

function isSmallerThanDate(value, date) {
  if (value.getFullYear() > date.getFullYear()) {
    return false;
  }

  if (value.getFullYear() < date.getFullYear()) {
    return true;
  }

  if (value.getMonth() > date.getMonth()) {
    return false;
  }

  if (value.getMonth() < date.getMonth()) {
    return true;
  }

  return value.getDate() <= date.getDate();
}

getDaysAmountInAMonth.propTypes = {
  date: PropTypes.number,
  month: PropTypes.number,
  year: PropTypes.number,
  type: "next" | "prev" | "current",
};
getPreviousMonthDays.propTypes = {
  year: PropTypes.number,
  month: PropTypes.number,
};
getNextMonthDays.propTypes = {
  year: PropTypes.number,
  month: PropTypes.number,
};
getCurrentMothDays.propTypes = {
  year: PropTypes.number,
  month: PropTypes.number,
  numberOfDays: PropTypes.number,
};

getInputValueFromDate.propTypes = {
  value: PropTypes.Date,
};

getDateFromInputValue.propTypes = {
  inputValue: PropTypes.string,
};
isValidDateString.propTypes = {
  value: PropTypes.string,
};

isToday.propTypes = {
  cell: PropTypes.any,
  todayDate: PropTypes.Date,
};
isInRange.propTypes = {
  value: PropTypes.Date,
  min: PropTypes.Date | undefined,
  max: PropTypes.Date | undefined,
};
isBiggerThanDate.propTypes = {
  value: PropTypes.Date,
  date: PropTypes.Date,
};
isSmallerThanDate.propTypes = {
  value: PropTypes.Date,
  date: PropTypes.Date,
};
