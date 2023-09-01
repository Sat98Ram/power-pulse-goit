import PropTypes from "prop-types";

import css from "./Container.module.css";

const Container = ({ children, className = "" }) => {
  return <div className={`${css.container} ${className}`}>{children}</div>;
};

export default Container;

Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
