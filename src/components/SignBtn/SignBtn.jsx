import PropTypes from "prop-types";
import css from "./SignBtn.module.css";

export const SignBtn = ({ className = "", text, type, onClick }) => {
  return (
    <button
      className={`${css.signBtn} ${className}`}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

SignBtn.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};
