import { useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import css from "./AddProductModalWindow.module.css";
import { addDiariesProductThunk } from "../../redux/diary/operations";
import { getInputValueFromDate } from "../DatePickerCalendar/utils";
import { AddProductSuccess } from "../products/AddProductSuccess/AddProductSuccess";
import BasicModalWindow from "../BasicModalWindow/BasicModalWindow";

const AddProductForm = ({ eldata }) => {
  const dispatch = useDispatch();
  const { title, calories, _id: id } = eldata;
  const [quantity, setQuantity] = useState("");
  const calculatedCalories = (quantity * calories) / 100;
  const date = getInputValueFromDate(new Date(), true);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const openModalToggle = () => {
    setIsOpenModal((prev) => !prev);
  };
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const handleAddToDiary = () => {
    dispatch(
      addDiariesProductThunk({ date, product: id, amount: calculatedCalories })
    )
      .then((response) => {
        setIsSuccessModalOpen(true);
      })
      .catch((error) => {
        console.error("Error adding product", error);
      });
    openModalToggle();
  };

  return (
    <div className={css.modal}>
      <form className={css.form}>
        <div className={css.input}>
          <label>
            <input
              className={css.inputTitle}
              type="text"
              value={title}
              disabled
            />
          </label>
          <label>
            <input
              className={css.inputQuantity}
              placeholder="grams"
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </label>
        </div>
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
        {isOpenModal && (
          <BasicModalWindow isOpenModalToggle={openModalToggle}>
            {isSuccessModalOpen && <AddProductSuccess calories={calories} />}
          </BasicModalWindow>
        )}
      </form>
    </div>
  );
};
AddProductForm.propTypes = {
  eldata: PropTypes.object,
  openModalToggle: PropTypes.func,
};
export default AddProductForm;
