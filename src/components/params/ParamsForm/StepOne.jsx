import PropTypes from "prop-types";
import css from "./ParamsForm.module.css";

const StepOne = ({ formik, submit }) => {
  return (
    <>
      <p>
        To ensure a personalized user experience and the proper functioning of
        our platform, we ask you to provide the following information about your
        weight, height and other relevant data:
      </p>
      <form onSubmit={submit} className={css.stepOne}>
        <label>
          Height
          <input
            className={css.input}
            type="text"
            required
            name="height"
            onChange={formik.handleChange}
            value={formik.values.height}
          />
        </label>
        <label>
          Current Weight
          <input
            className={css.input}
            type="text"
            required
            name="currentWeight"
            onChange={formik.handleChange}
            value={formik.values.currentWeight}
          />
        </label>
        <label>
          Desired Weight
          <input
            className={css.input}
            type="text"
            required
            name="desiredWeight"
            onChange={formik.handleChange}
            value={formik.values.desiredWeight}
          />
        </label>
        <input
          className={css.input}
          type="date"
          required
          placeholder="Birthday"
          name="birthday"
          onChange={formik.handleChange}
          value={formik.values.birthday}
        />
        <button type="submit">Next</button>
      </form>
    </>
  );
};

export default StepOne;

StepOne.propTypes = {
  formik: PropTypes.any,
  submit: PropTypes.func,
};
