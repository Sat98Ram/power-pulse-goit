import PropTypes from "prop-types";

import css from "./Productsitem.module.css";
import { useSelector } from "react-redux";
import { selectBloodType } from "../../../redux/auth/selectors";

export const ProductsItem = ({ el, openModalToggle }) => {
  const bloodType = useSelector(selectBloodType);

  return (
    <li className={css.products_card}>
      <div className={css.products_card_status}>
        <span className={css.products_card_diet}>
          <p className={css.products_card_diet_text}>diet</p>
        </span>
        <div className={css.products_card_status_cont}>
          <p
            className={
              el.groupBloodNotAllowed[bloodType]
                ? css.products_status_recommended_text_true
                : css.products_status_recommended_text_false
            }
          >
            {el.groupBloodNotAllowed[bloodType]
              ? "Recommended"
              : "Not recommended"}
          </p>

          <button
            onClick={() => {
              openModalToggle(el);
            }}
            className={css.products_card_btnAdd}
            type="button"
          >
            Add
          </button>
        </div>
      </div>
      <h4 className={css.products_card_title}>{el.title}</h4>

      <ul className={css.products_card_info}>
        <li className={css.products_card_info_item}>
          Calories:{" "}
          <p className={css.products_card_info_value}>{el.calories || "999"}</p>
        </li>
        <li className={css.products_card_info_item}>
          Category:{" "}
          <p className={css.products_card_info_value}>{el.category}</p>
        </li>
        <li className={css.products_card_info_item}>
          Weight:{" "}
          <p className={css.products_card_info_value}>{el.weight || "300"}</p>
        </li>
      </ul>
    </li>
  );
};

ProductsItem.propTypes = {
  el: PropTypes.object.isRequired,
  openModalToggle: PropTypes.func.isRequired,
};
