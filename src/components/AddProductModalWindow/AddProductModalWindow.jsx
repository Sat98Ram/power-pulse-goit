import { useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import css from "./AddProductModalWindow.module.css";
import { addDiariesProductThunk } from "../../redux/diary/operations";
import { getInputValueFromDate } from "../DatePickerCalendar/utils";
import { toast } from "react-toastify";
// import { selectDiaryDate } from "../../redux/diary/selectors";

const AddProductForm = ({ eldata, onClick, closeModal }) => {
  const dispatch = useDispatch();
  const { title, calories, _id: product } = eldata;
  const [quantity, setQuantity] = useState(0);
  // const date = useSelector(selectDiaryDate);

  const amount = Math.round((quantity * calories) / 100);

  const handleAddToDiary = () => {
    const date = getInputValueFromDate(new Date(), true);
    if (!amount) {
      toast.error("Must be greater than 0");
      return;
    }
    dispatch(
      addDiariesProductThunk({ date, product, amount: quantity, eldata })
    )
      .then(() => {
        onClick(amount);
      })
      .catch((error) => {
        toast(error.message);
      });
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
            {amount}
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
          <button className={css.btnCancel} type="button" onClick={closeModal}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
AddProductForm.propTypes = {
  eldata: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
};
export default AddProductForm;
