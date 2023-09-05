import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { selectorBodyData, selectUser } from "../../redux/auth/selectors";

import css from "./UserForm.module.css";
import { capitalizeFirstLeter } from "../../helpers/capitalizeFirstLeter";

import { updateBodyThunk } from "../../redux/auth/operations";

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
  const bodyData = useSelector(selectorBodyData);
  const { email, name } = user;
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
      name: name,
      email: email,
      height: height,
      currentWeight: currentWeight,
      desiredWeight: desiredWeight,
      birthday: birthday,
      blood: blood,
      sex: sex,
      levelActivity: levelActivity,
    },
    onSubmit: (values) => {
      dispatch(updateBodyThunk(values));
    },
  });

  const date = new Date(formik.values.birthday);
  const year = date.toLocaleString("default", { year: "numeric" });
  const month = date.toLocaleString("default", { month: "2-digit" });
  const day = date.toLocaleString("default", { day: "2-digit" });
  const formattedDate = year + "-" + month + "-" + day;

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
            name="height"
            onChange={formik.handleChange}
            value={formik.values.height}
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
            name="currentWeight"
            onChange={formik.handleChange}
            value={formik.values.currentWeight}
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
            name="desiredWeight"
            onChange={formik.handleChange}
            value={formik.values.desiredWeight}
          />
          <p className={`${css.labelText} ${css.bastard}`}>Desired Weight</p>
        </label>
        {/* ===========Birthday input========== */}
        <input
          className={` ${css.input} ${css.birthday}`}
          type="date"
          placeholder="Birthday"
          name="birthday"
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
                  name="blood"
                  checked={Number(formik.values.blood) === el}
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
                  name="sex"
                  checked={formik.values.sex === el}
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
                name="levelActivity"
                onChange={formik.handleChange}
                checked={Number(formik.values.levelActivity) === i + 1}
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
          formik.values.height === bodyData.height &&
          formik.values.currentWeight === bodyData.currentWeight &&
          formik.values.desiredWeight === bodyData.desiredWeight &&
          formik.values.birthday === bodyData.birthday &&
          formik.values.blood === bodyData.blood &&
          formik.values.sex === bodyData.sex &&
          formik.values.levelActivity === bodyData.levelActivity &&
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
