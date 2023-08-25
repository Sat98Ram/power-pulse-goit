import css from "./CloseSvg.module.css";
import PropTypes from "prop-types";

const CloseSvg = ({ className }) => {
  return (
    <button className={`${className} ${css.closeSvg}`}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
        <path d="M16.5 5.5L5.5 16.5" />
        <path d="M5.5 5.5L16.5 16.5" />
      </svg>
    </button>
  );
};

export default CloseSvg;

CloseSvg.propTypes = {
  className: PropTypes.string,
};
