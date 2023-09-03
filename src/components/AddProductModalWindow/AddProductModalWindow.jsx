import { useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import css from "./AddProductModalWindow.module.css";
import { addDiariesProductThunk } from "../../redux/diary/operations";
import { getInputValueFromDate } from "../DatePickerCalendar/utils";

const AddProductForm = ({ eldata, openModalToggle }) => {
  const dispatch = useDispatch();
  const { title, calories, _id: id } = eldata;
  const [quantity, setQuantity] = useState("");
  const calculatedCalories = (quantity * calories) / 100;
  const date = getInputValueFromDate(new Date(), true);
  const handleAddToDiary = () => {
    dispatch(
      addDiariesProductThunk({ date, product: id, amount: calculatedCalories })
    )
      .then((response) => {
        console.log("Product added successfully", response);
      })
      .catch((error) => {
        console.error("Error adding product", error);
      });
    openModalToggle();
  };

  return (
    <div className={css.modal}>
      <form className={css.form}>
        <label>
          <input className={css.input} type="text" value={title} disabled />
        </label>
        <br />
        <label>
          <input
            className={css.input}
            placeholder="grams"
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </label>
        <br />
        <p>
          <span className={css.calories}>
            <span className={css.titleCalories}>Calories:</span>
            {calculatedCalories}
          </span>
        </p>
        <br />
        <div className={css.btn}>
          <button
            className={css.btnAdd}
            type="button"
            onClick={handleAddToDiary}
          >
            Add to diary
          </button>
          <button
            className={css.btnCancel}
            type="button"
            onClick={openModalToggle}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
AddProductForm.propTypes = {
  eldata: PropTypes.object,
  openModalToggle: PropTypes.func,
};
export default AddProductForm;
