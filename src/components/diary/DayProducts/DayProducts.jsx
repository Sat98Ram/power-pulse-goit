import PropTypes from "prop-types";
import styles from "./DayProducts.module.css";
import { nanoid } from "@reduxjs/toolkit";
import symbolDefs from "../../../assets/images/symbol-defs.svg";

const DayProducts = ({ consumedProducts, isMobile }) => {
  const listOfProducts = consumedProducts.map((obj) => {
    const returnProductString = (string_length = "", number = 20) => {
      if (!isMobile) {
        if (string_length.length > number) {
          let newString = "";
          for (let index = 0; index < number - 3; index++) {
            newString = newString + string_length[index];
          }
          return (newString = newString + "...");
        }
        return string_length;
      }
      return string_length;
    };
    const num = nanoid();
    return (
      <tr key={num}>
        <td className={styles.tdTitle}><div>{obj.product.title}</div></td>
        <td className={styles.tdCategory}><div>{obj.product.category}</div></td>
        <td className={styles.tdCalories}><div>{obj.product.calories}</div></td>
        <td className={styles.tdWeight}><div>{obj.product.weight}</div></td>
        <td className={styles.tdRecommend}>
          {obj.product.recommend ? (
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
          <button>
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
};
