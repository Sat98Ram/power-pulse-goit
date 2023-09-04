import PropTypes from "prop-types";
import css from "./ParamsForm.module.css";
import sprite from "@/assets/images/symbol-defs.svg";
import { Calendar } from "./Calendar";

const StepOne = ({ formik, nextStep }) => {
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
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.height}
            />
            {formik.touched.height && formik.errors.height ? (
              <p className={css.error}>{formik.errors.height}</p>
            ) : (
              <p className={css.labelText}>Height</p>
            )}
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
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.currentWeight}
            />
            {formik.touched.currentWeight && formik.errors.currentWeight ? (
              <p className={css.error}>{formik.errors.currentWeight}</p>
            ) : (
              <p className={css.labelText}>Current Weight</p>
            )}
            {/* <p className={css.labelText}>Current Weight</p> */}
          </label>
          <label className={css.label}>
            <input
              className={css.input}
              placeholder=" "
              type="number"
              required
              min="35"
              name="desiredWeight"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.desiredWeight}
            />
            {formik.touched.desiredWeight && formik.errors.desiredWeight ? (
              <p className={`${css.error} ${css.bastard}`}>
                {formik.errors.desiredWeight}
              </p>
            ) : (
              <p className={`${css.labelText} ${css.bastard}`}>
                Desired Weight
              </p>
            )}
            {/* <p className={`${css.labelText} ${css.bastard}`}>Desired Weight</p> */}
          </label>
          {/* <DatePickerCalendar
            // value={date}
            YearBool={true}
            // onChange={(date) => {handleChange(date)}}
          /> */}
          {/* <input
            className={css.input}
            type="date"
            required
            placeholder="Birthday"
            name="birthday"
            onChange={formik.handleChange} /> */}
          <label>
            <Calendar
              // max={}
              onChange={(value) => formik.setFieldValue("birthday", value)}
              value={formik.values.birthday}
            />
            {formik.touched.birthday && formik.errors.birthday ? (
              <p className={`${css.error} ${css.bastard}`}>
                {formik.errors.birthday}
              </p>
            ) : (
              <p className={`${css.labelText} ${css.bastard}`}>
                Desired Weight
              </p>
            )}
          </label>
        </div>
        <button
          disabled={
            (formik.touched.height && formik.errors.height) ||
            (formik.touched.currentWeight && formik.errors.currentWeight) ||
            (formik.touched.desiredWeight && formik.errors.desiredWeight)
              ? true
              : false
          }
          type="button"
          onClick={nextStep}
          className={css.btnNext}
        >
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
  nextStep: PropTypes.func,
};
