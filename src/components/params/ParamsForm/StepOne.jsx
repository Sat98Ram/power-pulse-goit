import PropTypes from "prop-types";
import css from "./ParamsForm.module.css";
import sprite from "../../../assets/images/symbol-defs.svg";
import { DatePickerCalendar } from "../../DatePickerCalendar/DatePickerCalendar";
// import { useState } from "react";

const StepOne = ({ formik, nextStep }) => {
  // const [date, setDate] = useState("");
  // const handleChange = (date) => {
  //   setDate(date)
  // };
  // console.log("date", date);

  return (
    <>
      <p className={css.text}>
        To ensure a personalized user experience and the proper functioning of
        our platform, we ask you to provide the following information about your
        weight, height and other relevant data:
      </p>
      <div className={css.stepOne}>
        <div className={css.soBlock}>
          <label className={css.label}>
            <input
              className={css.input}
              placeholder=" "
              type="number"
              required
              min="150"
              name="height"
              onChange={formik.handleChange}
              value={formik.values.height}
            />
            <p className={css.labelText}>Height</p>
            {/* {formik.touched.height && formik.errors.height ? (
              <div>{formik.errors.height}</div>
            ) : null} */}
            {/* {errors.name && touched.name ? <p>error</p>} */}
          </label>
          <label className={css.label}>
            <input
              className={css.input}
              placeholder=" "
              type="number"
              required
              min="35"
              name="currentWeight"
              onChange={formik.handleChange}
              value={formik.values.currentWeight}
            />
            <p className={css.labelText}>Current Weight</p>
          </label>
          <label className={css.label}>
            <input
              className={css.input}
              placeholder=" "
              type="number"
              required
              min="35"
              name="desiredWeight"
              onChange={formik.handleChange}
              value={formik.values.desiredWeight}
            />
            <p className={`${css.labelText} ${css.bastard}`}>Desired Weight</p>
          </label>
          {/* <DatePickerCalendar
            // value={date}
            YearBool={true}
            // onChange={(date) => {handleChange(date)}}
          /> */}
          <input
            className={css.input}
            type="date"
            required
            placeholder="Birthday"
            name="birthday"
            onChange={formik.handleChange}
            value={formik.values.birthday}
          />
        </div>
        <button type="button" onClick={nextStep} className={css.btnNext}>
          Next
          <svg className={css.icon}>
            <use href={sprite + "#icon-next"} />
          </svg>
        </button>
        {/* <button type="submit">Next</button> */}
      </div>
    </>
  );
};

export default StepOne;

StepOne.propTypes = {
  formik: PropTypes.any,
  submit: PropTypes.func,
};
