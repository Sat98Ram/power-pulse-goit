import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";

import css from "./UserForm.module.css";
import { capitalizeFirstLeter } from "../../helpers/capitalizeFirstLeter";

import { changeBodyThunk, changeNameThunk } from "../../redux/auth/operations";

const bloodList = [1, 2, 3, 4];
const sexList = ["male", "female"];
const levelActivityList = [
  "Sedentary lifestyle (little or no physical activity)",
  "Light activity (light exercises/sports 1-3 days per week)",
  "Moderately active (moderate exercises/sports 3-5 days per week)",
  "Very active (intense exercises/sports 6-7 days per week)",
  "Extremely active (very strenuous exercises/sports and physical work)",
];

export const UserForm = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const { bodyData, email, name } = user;
  const {
    height,
    currentWeight,
    desiredWeight,
    birthday,
    blood,
    sex,
    levelActivity,
  } = bodyData;

  const formik = useFormik({
    initialValues: {
      name,
      email,
      bodyData: {
        height,
        currentWeight,
        desiredWeight,
        birthday,
        blood,
        sex,
        levelActivity,
      },
    },
    onSubmit: (values) => {
      if (name !== values.name) {
        const updateName = {
          name: values.name,
        };
        dispatch(changeNameThunk(updateName));
        dispatch(changeBodyThunk(values.bodyData));
      } else {
        dispatch(changeBodyThunk(values.bodyData));
      }
    },
  });

  //   console.log(formik);
  //   console.log(user);
  const date = new Date(formik.values.bodyData.birthday);
  const year = date.toLocaleString("default", { year: "numeric" });
  const month = date.toLocaleString("default", { month: "2-digit" });
  const day = date.toLocaleString("default", { day: "2-digit" });
  const formattedDate = year + "-" + month + "-" + day;

  //   const onSubmit = (e) => {
  //     e.preventDefault();
  //     if (name !== formik.values.name) {
  //       const updateName = {
  //         name: formik.values.name,
  //       };
  //       dispatch(changeNameThunk(updateName));
  //       dispatch(changeBodyThunk(formik.values.bodyData));
  //     } else {
  //       dispatch(changeBodyThunk(formik.values.bodyData));
  //     }
  //     console.log("result", formik);
  //   };

  return (
    <form
      onSubmit={formik.handleSubmit}
      className={css.form}
      onChange={formik.handleChange}
    >
      <h4 className={css.formHeader}>Basic info</h4>
      <div className={css.basicInfo}>
        {/* ===========Name input========== */}
        <label className={css.label}>
          <input
            className={css.infoInput}
            type="text"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </label>
        {/* ===========Email input========== */}
        <label className={css.label}>
          <input
            className={` ${css.infoInput} ${css.email}`}
            type="text"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </label>
      </div>
      <div className={css.soBlock}>
        {/* ===========Height input========== */}
        <label className={css.label}>
          <input
            className={` ${css.input} ${css.height}`}
            type="number"
            min="150"
            name="bodyData.height"
            onChange={formik.handleChange}
            value={formik.values.bodyData.height}
          />
          <p className={css.labelText}>Height</p>
        </label>
        {/* ===========Current weight input========== */}
        <label className={css.label}>
          <input
            className={` ${css.input} ${css.curWeight}`}
            placeholder=" "
            type="number"
            min="35"
            name="bodyData.currentWeight"
            onChange={formik.handleChange}
            value={formik.values.bodyData.currentWeight}
          />
          <p className={css.labelText}>Current Weight</p>
        </label>
        {/* ===========Desired weight input========== */}
        <label className={css.label}>
          <input
            className={` ${css.input} ${css.desWeight}`}
            placeholder=" "
            type="number"
            min="35"
            name="bodyData.desiredWeight"
            onChange={formik.handleChange}
            value={formik.values.bodyData.desiredWeight}
          />
          <p className={`${css.labelText} ${css.bastard}`}>Desired Weight</p>
        </label>
        {/* ===========Birthday input========== */}
        <input
          className={` ${css.input} ${css.birthday}`}
          type="date"
          placeholder="Birthday"
          name="bodyData.birthday"
          onChange={formik.handleChange}
          value={formattedDate}
        />
      </div>
      <div className={css.firstBlock}>
        <div className={css.firstBlockItem}>
          {/* ===========Blood radio========== */}
          <ul className={css.fbiList}>
            {bloodList.map((el, i) => (
              <li className={css.radioItem} key={i}>
                <input
                  type="radio"
                  required
                  id={el}
                  className={css.radioBtn}
                  name="bodyData.blood"
                  checked={Number(formik.values.bodyData.blood) === el}
                  onChange={formik.handleChange}
                  value={el}
                />
                <label htmlFor={el} className={css.radioLabel}>
                  {el}
                </label>
              </li>
            ))}
          </ul>
        </div>
        <div className={css.firstBlockItem}>
          {/* ===========Sex radio========== */}
          <ul className={css.fbiList}>
            {sexList.map((el, i) => (
              <li className={css.radioItem} key={i}>
                <input
                  type="radio"
                  required
                  id={el}
                  className={css.radioBtn}
                  name="bodyData.sex"
                  checked={formik.values.bodyData.sex === el}
                  onChange={formik.handleChange}
                  value={el}
                />
                <label htmlFor={el} className={css.radioLabel}>
                  {capitalizeFirstLeter(el)}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={css.secondBlock}>
        {/* ===========Activity radio========== */}
        <ul className={css.secondBlockList}>
          {levelActivityList.map((el, i) => (
            <li className={css.radioItem} key={i}>
              <input
                type="radio"
                required
                id={el}
                className={css.radioBtn}
                name="bodyData.levelActivity"
                onChange={formik.handleChange}
                checked={Number(formik.values.bodyData.levelActivity) === i + 1}
                value={i + 1}
              />
              <label htmlFor={el} className={css.radioLabel}>
                {el}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <button
        disabled={
          formik.values.bodyData.height === bodyData.height &&
          formik.values.bodyData.currentWeight === bodyData.currentWeight &&
          formik.values.bodyData.desiredWeight === bodyData.desiredWeight &&
          formik.values.bodyData.birthday === bodyData.birthday &&
          formik.values.bodyData.blood === bodyData.blood &&
          formik.values.bodyData.sex === bodyData.sex &&
          formik.values.bodyData.levelActivity === bodyData.levelActivity &&
          formik.values.name === name
        }
        type="submit"
        className={css.btnSubmit}
      >
        Save
      </button>
    </form>
  );
};
