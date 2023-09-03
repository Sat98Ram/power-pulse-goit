import PropTypes from "prop-types";

import css from "./Productsitem.module.css";
import AddProductForm from "../../AddProductModalWindow/AddProductModalWindow";
import BasicModalWindow from "../../BasicModalWindow/BasicModalWindow";
import { useState } from "react";

export const ProductsItem = ({ el }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  // const onClickAdd = () => {
  //   console.log("click");
  // };
  const openModalToggle = () => {
    setIsOpenModal((prev) => !prev);
  };
  return (
    <>
      {isOpenModal && (
        <BasicModalWindow isOpenModalToggle={openModalToggle}>
          <AddProductForm eldata={el} openModalToggle={openModalToggle} />
        </BasicModalWindow>
      )}
      <li className={css.products_card}>
        <div className={css.products_card_status}>
          <span className={css.products_card_diet}>
            <p className={css.products_card_diet_text}>diet</p>
          </span>
          <div className={css.products_card_status_cont}>
            <p
              className={
                Object.values(el.groupBloodNotAllowed).some((el) => el === true)
                  ? css.products_status_recommended_text_true
                  : css.products_status_recommended_text_false
              }
            >
              {Object.values(el.groupBloodNotAllowed).some((el) => el === true)
                ? "Recommended"
                : "Not recommended"}
            </p>

            <button
              onClick={openModalToggle}
              className={css.products_card_btnAdd}
              type="button"
            >
              Add
            </button>
          </div>
        </div>
        <h4 className={css.products_card_title}>
          {(el.title &&
            (el.title.length > 15
              ? el.title.slice(0, 27).charAt(0).toUpperCase() +
                el.title.slice(1, 27) +
                "..."
              : el.title.charAt(0).toUpperCase() + el.title.slice(1))) ||
            "Title"}
        </h4>

        <ul className={css.products_card_info}>
          <li className={css.products_card_info_item}>
            Calories:{" "}
            <p className={css.products_card_info_value}>
              {el.calories || "999"}
            </p>
          </li>
          <li className={css.products_card_info_item}>
            Category:{" "}
            <p className={css.products_card_info_value}>
              {el.category && el.category.length > 20
                ? el.category.slice(0, 20) + "..."
                : el.category || "category"}
            </p>
          </li>
          <li className={css.products_card_info_item}>
            Weight:{" "}
            <p className={css.products_card_info_value}>{el.weight || "300"}</p>
          </li>
        </ul>
      </li>
    </>
  );
};

ProductsItem.propTypes = {
  el: PropTypes.object.isRequired,
};
