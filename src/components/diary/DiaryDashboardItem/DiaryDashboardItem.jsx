import css from "./DiaryDashboardItem.module.css";
import PropTypes from "prop-types";

export const DiaryDashboardItem = ({
  svg = "",
  title = "",
  content = "",
  className = "",
}) => {
  return (
    <div className={` ${css.diary_item}   ${className}`}>
      <div className={css.header}>
        <div className={css.svg}>{svg}</div>
        <div className={css.title}>{title}</div>
      </div>

      <div className={css.content}>{content}</div>
    </div>
  );
};

DiaryDashboardItem.propTypes = {
  svg: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  className: PropTypes.string,
};
