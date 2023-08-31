import PropTypes from "prop-types";
import css from "./ParamsForm.module.css";
import sprite from "../../../assets/images/symbol-defs.svg";

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
      <form onSubmit={submit} className={css.form}>
        <div className={css.firstBlock}>
          <div className={css.firstBlockItem}>
            <h3>Blood:</h3>
            <ul className={css.fbiList}>
              {blood.map((el, i) => (
                <li className={css.radioItem} key={i}>
                  <input
                    type="radio"
                    required
                    id={el}
                    className={css.radioBtn}
                    // checked
                    name="blood"
                    onChange={formik.handleChange}
                    value={i + 1}
                  />
                  <label htmlFor={el} className={css.radioLabel}>
                    {el}
                  </label>
                </li>
              ))}
            </ul>
          </div>
          <div className={css.firstBlockItem}>
            <h3>Sex:</h3>
            <ul className={css.fbiList}>
              {sex.map((el, i) => (
                <li className={css.radioItem} key={i}>
                  <input
                    type="radio"
                    required
                    id={el}
                    className={css.radioBtn}
                    // checked
                    name="sex"
                    onChange={formik.handleChange}
                    value={i + 1}
                  />
                  <label htmlFor={el} className={css.radioLabel}>
                    {el}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={css.secondBlock}>
          <h3>Level Activity:</h3>
          <ul className={css.secondBlockList}>
            {levelActivity.map((el, i) => (
              <li className={css.radioItem} key={i}>
                <input
                  type="radio"
                  required
                  id={el}
                  className={css.radioBtn}
                  // checked
                  name="levelActivity"
                  onChange={formik.handleChange}
                  value={i + 1}
                />
                <label htmlFor={el} className={css.radioLabel}>
                  {el}
                </label>
              </li>
            ))}
          </ul>

          <div className={css.btnBlock}>
            <button type="button" onClick={prevStep} className={css.btn}>
              <svg className={css.icon}>
                <use href={sprite + "#icon-back"} />
              </svg>
              Back
            </button>
            <button type="submit" className={css.btnNext}>
              Next
              <svg className={css.icon}>
                <use href={sprite + "#icon-next"} />
              </svg>
            </button>
          </div>
        </div>
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
