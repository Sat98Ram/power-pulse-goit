import React, { useState } from "react";
import css from "./AddProductForm.module.css";
import BasicModalWindow from "../../BasicModalWindow/BasicModalWindow";

export const AddProductForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={css.AddProductForm}>
        <BasicModalWindow isOpenModalToggle={closeModal}>
          <div className={css.AddProductForm}>
            <div className={css.AddProductFormWrap}>
              <input
                className={css.AddProductFormInput}
                type="text"
                placeholder="Banana juice"
              />
              <input
                className={css.AddProductFormInput}
                type="text"
                placeholder=""
              />
              <label className={css.AddProductFormLabel} htmlFor="grams">grams</label>
            </div>
            <p className={css.AddProductFormTxt}>
              Calories: <span className={css.AddProductFormSub}>96</span>
            </p>
            <div className={css.AddProductFormWrapBtn}>
              <button className={css.AddProductFormBtn}>Add to diary</button>
              <button onClick={closeModal} className={css.AddProductFormCancelBtn}>Cancel</button>
            </div>
          </div>
        </BasicModalWindow>
    </div>
  );
};
