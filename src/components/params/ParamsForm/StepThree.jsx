import PropTypes from "prop-types";
import css from "./ParamsForm.module.css";
import { TitlePage } from "../../TitlePage/TitlePage";
// import { SignBtn } from "../../SignBtn/SignBtn";
import sprite from "../../../assets/images/symbol-defs.svg";
// import { useDispatch, useSelector } from "react-redux";
// import { updateBodyThunk } from "../../../redux/auth/operations";
// import { selectRawData } from "../../../redux/auth/selectors";
// import { Link } from "react-router-dom";

const StepThree = ({ prevStep }) => {
  // const dispatch = useDispatch();
  // const bodyData = useSelector(selectRawData);

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
        <button
          // to="diary"
          className={css.btnGo}
          type="submit"
          // onClick={() => dispatch(updateBodyThunk(bodyData))}
        >
          Go
        </button>
        {/* <button type="submit">Go</button> */}
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
