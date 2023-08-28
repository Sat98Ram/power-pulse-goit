import PropTypes from "prop-types";
import css from "./Pagination.module.css";
import { NavLink } from "react-router-dom";

const Pagination = ({ page, handleClickId }) => {
  const IconGroup = (props) => {
    const { i, onClick } = props;
    // const setActive = ({ isActive }) =>
    //   isActive ? `${css.active} ${css.link_style} ` : `${css.link_style} `;
    console.log("МАЛЮЮСЬ");
    return (
      <label className={css.btn_radio}>
        <input
          type="radio"
          id={i + 1}
          name="radio-grp"
          onClick={() => onClick(i)}
        />
        <svg width="20px" height="20px" viewBox="0 0 20 20">
          <circle cx="10" cy="10" r="9"></circle>
          <path
            d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z"
            className={css.inner}
          ></path>
          <path
            d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z"
            className={css.outer}
          ></path>
        </svg>
      </label>
      //   <NavLink onClick={() => onClick(i)} className={setActive}>
      //     X{i}
      //   </NavLink>
    );
  };
  const forEachIcon = (page) => {
    let icons = [];
    for (let i = 0; i < page; i++) {
      icons = [
        ...icons,
        <li key={i}>
          <IconGroup i={i} onClick={() => handleClickId(i + 1)} />
        </li>,
      ];
    }

    return icons;
  };
  return <ul className={css.cntr}>{forEachIcon(page)}</ul>;
};

export default Pagination;

Pagination.propTypes = {
  page: PropTypes.number,
  handleClickId: PropTypes.func,
  i: PropTypes.number,
  onClick: PropTypes.func,
};
