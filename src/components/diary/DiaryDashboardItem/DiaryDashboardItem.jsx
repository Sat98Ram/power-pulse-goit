import symbolDefs from "../../../assets/images/symbol-defs.svg";
import css from "./DiaryDashboardItem.module.css";
import PropTypes from "prop-types";

export const DiaryDashboardItem = ({
  svg = "",
  title = "",
  content = 0,
  className = "",
  type = "",
  measurement = "",
}) => {
  const returnBorder = () => {
    if (type === "sport" && content < 0) {
      return css.gren;
    } else if (type === "calories" && content < 0) {
      return css.red;
    }
  };

  const returnContent = (content) => {
    if (type === "sport" && content < 0) {
      return `+ ${-content}`;
    }
    return content;
  };
  return (
    <div
      className={` ${css.diary_item}   ${className} ${type && returnBorder()}`}
    >
      <div className={css.header}>
        <div className={css.svg}>
          <svg className={css.colorSvg} width="20" height="20">
            <use href={symbolDefs + `#${svg}`}></use>
          </svg>
        </div>
        <div className={css.title}>{title}</div>
      </div>

      <div className={css.content}>
        {returnContent(Math.round(content))}

        <span>{measurement}</span>
      </div>
    </div>
  );
};

DiaryDashboardItem.propTypes = {
  svg: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.any,
  className: PropTypes.string,
  type: PropTypes.string,
  measurement: PropTypes.string,
};
