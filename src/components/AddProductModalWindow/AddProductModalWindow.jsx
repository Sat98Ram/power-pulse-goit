import { useState } from "react";
import { useDispatch } from "react-redux";

import { addDiariesProductThunk } from "../../redux/diary/operations";
import { getInputValueFromDate } from "../DatePickerCalendar/utils";

const AddProductForm = ({ eldata, openModalToggle }) => {
  const dispatch = useDispatch();
  const { title, calories, _id: id } = eldata;
  const [quantity, setQuantity] = useState(0);
  const calculatedCalories = (quantity * calories) / 100;
  const date = getInputValueFromDate(new Date(), true);
  console.log(date);
  console.log(eldata);
  const handleAddToDiary = () => {
    // Розрахунок калорій на основі формули

    // Відправка даних на бекенд та обробка результату
    dispatch(
      addDiariesProductThunk({ date, product: id, amount: calculatedCalories })
    )
      .then((response) => {
        // Обробка успішної відправки на бекенд та закриття модального вікна
        // Відобразити модальне вікно з повідомленням про успіх (AddProductSuccess)
        console.log("Product added successfully", response);

        // Закриття модального вікна з AddProductForm
        // Відкриття модального вікна з AddProductSuccess
      })
      .catch((error) => {
        // Обробка помилок від бекенда та відображення повідомлення для користувача
        console.error("Error adding product", error);
        // Покажіть повідомлення користувачу про помилку
      });
    openModalToggle();
  };

  return (
    <div>
      <h2>Add Product to Diary</h2>
      <form>
        <label>
          Product Name:
          <input type="text" value={title} disabled />
        </label>
        <br />
        <label>
          Quantity (g):
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </label>
        <br />
        <p>
          Calories per 100g:
          <span>{calculatedCalories}</span>
        </p>
        <br />
        <button type="button" onClick={handleAddToDiary}>
          Add to Diary
        </button>
        {/* <button type="button" onClick={handleCancel}>
          Cancel
        </button> */}
      </form>
    </div>
  );
};

export default AddProductForm;
