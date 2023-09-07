import PropTypes from "prop-types";
import styles from "./DayProducts.module.css";
import { nanoid } from "@reduxjs/toolkit";
import symbolDefs from "../../../assets/images/symbol-defs.svg";
import { useDispatch } from "react-redux";
import { deleteDiaryProductThunk } from "../../../redux/diary/operations";
import { Link } from "react-router-dom";

const DayProducts = ({ consumedProducts, blood, date }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(
      deleteDiaryProductThunk({
        date,
        productId: id,
      })
    );
  };
  const recomendProduct = (groupBloodNotAllowed) => {
    return groupBloodNotAllowed[blood];
  };

  const addProductBtn = () => {
    return (
      <Link to="/products" className={styles.linkProducts}>
        <p className={styles.btnAddProduct}>
          Add product
          <svg className={styles.arrowIcon}>
            <use href={symbolDefs + "#arrow-icon"}></use>
          </svg>
        </p>
      </Link>
    );
  };

  const listOfProducts = consumedProducts.map((obj) => {
    const num = nanoid();
    return (
      <tr key={num}>
        <td className={styles.tdTitle}>
          <div>{obj.product.title}</div>
        </td>
        <td className={styles.tdCategory}>
          <div>{obj.product.category}</div>
        </td>
        <td className={styles.tdCalories}>
          <div>{obj.calories}</div>
        </td>
        <td className={styles.tdWeight}>
          <div>{obj.amount}</div>
        </td>
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
          <button onClick={() => handleDelete(obj._id)}>
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
            {addProductBtn()}
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
            {addProductBtn()}
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
  blood: PropTypes.number,
  date: PropTypes.string,
};
