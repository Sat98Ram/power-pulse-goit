import PropTypes from "prop-types";
// import css from "./ParamsForm.module.css";
import { TitlePage } from "../../TitlePage/TitlePage";

const StepThree = ({ prevStep }) => {
  return (
    <>
      <TitlePage text={"Dear user"} />
      <p>
        Thank you for filling in all the required data. We greatly appreciate
        your cooperation and commitment to a healthy lifestyle. The collected
        information will allow us to provide you with a more individual and
        personalized approach.
      </p>
      <button type="submit">Go</button>
      <button type="button" onClick={prevStep}>
        Back
      </button>
    </>
  );
};

export default StepThree;

StepThree.propTypes = {
  prevStep: PropTypes.func,
};
