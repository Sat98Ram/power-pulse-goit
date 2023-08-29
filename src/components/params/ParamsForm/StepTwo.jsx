import PropTypes from "prop-types";
import css from "./ParamsForm.module.css";

const blood = ["1", "2", "3", "4"];
const sex = ["Male", "Female"];
const levelActivity = [
  "Sedentary lifestyle (little or no physical activity)",
  "Light activity (light exercises/sports 1-3 days per week)",
  "Moderately active (moderate exercises/sports 3-5 days per week)",
  "Very active (intense exercises/sports 6-7 days per week)",
  "Extremely active (very strenuous exercises/sports and physical work)",
];

const StepTwo = ({ formik, submit, prevStep }) => {
  return (
    <>
      <form onSubmit={submit}>
        <div>
          <div>
            <h3>Blood:</h3>
            <ul role="radiogrup">
              {blood.map((el, i) => (
                <li key={i}>
                  <label className={css.radioGroup}>
                    <input
                      type="radio"
                      required
                      name="blood"
                      onChange={formik.handleChange}
                      value={i + 1}
                    />
                    {el}
                  </label>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Sex:</h3>
            <ul>
              {sex.map((el, i) => (
                <li key={i}>
                  <label className={css.radioGroup}>
                    <input
                      type="radio"
                      required
                      name="sex"
                      onChange={formik.handleChange}
                      value={i + 1}
                    />
                    {el}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <h3>Level Activity:</h3>
        <ul>
          {levelActivity.map((el, i) => (
            <li key={i}>
              <label className={css.radioGroup}>
                <input
                  type="radio"
                  required
                  name="levelActivity"
                  id="levelActivity"
                  onChange={formik.handleChange}
                  value={i + 1}
                />
                {el}
              </label>
            </li>
          ))}
        </ul>

        <button type="button" onClick={prevStep}>
          Back
        </button>

        <button type="submit">Next</button>
      </form>
    </>
  );
};

export default StepTwo;

StepTwo.propTypes = {
  formik: PropTypes.any,
  submit: PropTypes.func,
  prevStep: PropTypes.func,
};
