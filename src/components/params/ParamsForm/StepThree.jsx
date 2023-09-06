import PropTypes from "prop-types";

import css from "./ParamsForm.module.css";
import { TitlePage } from "../../TitlePage/TitlePage";
import sprite from "../../../assets/images/symbol-defs.svg";

const StepThree = ({ prevStep }) => {
  return (
    <>
      <TitlePage text={"Dear user"} />
      <p className={css.text}>
        Thank you for filling in all the required data. We greatly appreciate
        your cooperation and commitment to a healthy lifestyle. The collected
        information will allow us to provide you with a more individual and
        personalized approach.
      </p>
      <div className={css.blockBtn}>
        <button className={css.btnGo} type="submit">
          Go
        </button>
        <button type="button" onClick={prevStep} className={css.btn}>
          <svg className={css.icon}>
            <use href={sprite + "#icon-back"} />
          </svg>
          Back
        </button>
      </div>
    </>
  );
};

export default StepThree;

StepThree.propTypes = {
  prevStep: PropTypes.func,
};
