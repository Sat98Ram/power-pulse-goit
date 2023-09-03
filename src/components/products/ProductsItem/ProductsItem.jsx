import PropTypes from "prop-types"

import css from "./Productsitem.module.css"
import { useSelector } from "react-redux"
import { selectBloodType } from "../../../redux/auth/selectors"
import { useState } from "react"

export const ProductsItem = ({ el }) => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const openModalToggle = () => {
    setIsOpenModal((prev) => !prev)
  }

  const bloodType = useSelector(selectBloodType)

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
                el.groupBloodNotAllowed[bloodType]
                  ? css.products_status_recommended_text_true
                  : css.products_status_recommended_text_false
              }
            >
              {el.groupBloodNotAllowed[bloodType] ? "Recommended" : "Not recommended"}
            </p>

            <button onClick={openModalToggle} className={css.products_card_btnAdd} type="button">
              Add
            </button>
          </div>
        </div>
        <h4 className={css.products_card_title}>{el.title}</h4>

        <ul className={css.products_card_info}>
          <li className={css.products_card_info_item}>
            Calories: <p className={css.products_card_info_value}>{el.calories || "999"}</p>
          </li>
          <li className={css.products_card_info_item}>
            Category:{" "}
            <p className={css.products_card_info_value}>
              {el.category}
              {/* {el.category && el.category.length > 10
              ? el.category.slice(0, 10) + "..."
              : el.category || "category"} */}
            </p>
          </li>
          <li className={css.products_card_info_item}>
            Weight: <p className={css.products_card_info_value}>{el.weight || "300"}</p>
          </li>
        </ul>
      </li>
    </>
  )
}

ProductsItem.propTypes = {
  el: PropTypes.object.isRequired,
}
