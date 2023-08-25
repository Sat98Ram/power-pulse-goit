import PropTypes from "prop-types";
import css from "./TitlePage.module.css";

export const TitlePage = ({ text }) => {
  return <h2 className={css.title_page}>{text}</h2>;
};

TitlePage.propTypes = {
  text: PropTypes.string.isRequired,
};
