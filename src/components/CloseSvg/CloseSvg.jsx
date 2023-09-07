import PropTypes from "prop-types";
import css from "./CloseSvg.module.css";

const CloseSvg = ({ className, onClick }) => {
  return (
    <button className={`${className} ${css.closeSvg}`} onClick={onClick}>
      <svg
        className={css.svg}
        viewBox="0 0 22 22"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.5 5.5L5.5 16.5"
        />
        <path
          d="M5.5 5.5L16.5 16.5"
        />
      </svg>
    </button>
  );
};

export default CloseSvg;

CloseSvg.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};
