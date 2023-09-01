import css from "./SignUpForm.module.css";
import PropTypes from "prop-types";
export const SignUpBtn = () => {
  return (
    <button className={css.signUpBtn} type="submit">
      sign up
    </button>
  );
};

export default SignUpBtn;
