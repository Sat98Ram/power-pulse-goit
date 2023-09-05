import PropTypes from "prop-types";
import styles from "./DayProducts.module.css";
import { nanoid } from "@reduxjs/toolkit";
import symbolDefs from "../../../assets/images/symbol-defs.svg";
import { useDispatch } from "react-redux";
import { deleteDiaryProductThunk } from "../../../redux/diary/operations";
import { getInputValueFromDate } from "../../DatePickerCalendar/utils";

const DayProducts = ({ consumedProducts, isMobile, blood }) => {
  const dispatch = useDispatch();
  const returnProductString = (string_length = "", number = 20) => {
    if (string_length.length > number) {
      let newString = "";
      for (let index = 0; index < number - 3; index++) {
        newString = newString + string_length[index];
      }
      return (newString = newString + "...");
    }
    return string_length;
  };

  const recomendProduct = (groupBloodNotAllowed) => {
    return groupBloodNotAllowed[blood];
  };
  const deleteProduct = (id) => {
    dispatch(
      deleteDiaryProductThunk({
        productId: id,
        date: getInputValueFromDate(new Date(), true),
      })
    );
  };

  const listOfProducts = consumedProducts.map((obj) => {
    const num = nanoid();
    return (
      <tr key={num}>
        <td className={styles.tdTitle}>
          {returnProductString(obj.product.title, isMobile ? 34 : 20)}
        </td>
        <td className={styles.tdCategory}>
          {returnProductString(obj.product.category, isMobile ? 34 : 15)}
        </td>
        <td className={styles.tdCalories}>{obj.product.calories}</td>
        <td className={styles.tdWeight}>{obj.product.weight}</td>
        <td className={styles.tdRecommend}>
          {recomendProduct(obj.product.groupBloodNotAllowed) ? (
            <>
              <span>
                <svg className={styles.recommendCircle}>
                  <circle cx="7" cy="7" r="7" fill="green" />
                </svg>
                <p>Yes</p>
              </span>
            </>
          ) : (
            <>
              <span>
                <svg className={styles.recommendCircle}>
                  <circle cx="7" cy="7" r="7" fill="red" />
                </svg>
                <p>No</p>
              </span>
            </>
          )}
        </td>
        <td className={styles.tdDellete}>
          <button type="button" onClick={() => deleteProduct(obj.product._id)}>
            <svg>
              <use href={symbolDefs + "#trash-icon"}></use>
            </svg>
          </button>
        </td>
      </tr>
    );
  });

  return (
    <>
      {listOfProducts.length > 0 ? (
        <div className={styles.DayProducts}>
          <div className={styles.DayProductsHead}>
            <h2>Products</h2>
            <p>Add product</p>
          </div>
          <div className={styles.DayProductsTable}>
            <table>
              <thead>
                <tr>
                  <th className={styles.thTitle}>Title</th>
                  <th className={styles.thCategory}>Category</th>
                  <th className={styles.thCalories}>Calories</th>
                  <th className={styles.thWeight}>Weight</th>
                  <th className={styles.thRecommend}>Recommend</th>
                </tr>
              </thead>
              <tbody>{listOfProducts}</tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className={styles.DayProducts}>
          <div className={styles.DayProductsHead}>
            <h2>Products</h2>
            <p>Add product</p>
          </div>
          <div className={styles.DayProductsTable}>
            <p className={styles.not_found}>Not found products</p>
          </div>
        </div>
      )}
    </>
  );
};

export default DayProducts;

DayProducts.propTypes = {
  consumedProducts: PropTypes.arrayOf(
    PropTypes.shape({
      product: PropTypes.shape({
        weight: PropTypes.number,
        calories: PropTypes.number,
        category: PropTypes.string,
        title: PropTypes.string,
      }),
    })
  ),
  isMobile: PropTypes.bool,
  blood: PropTypes.number,
};
