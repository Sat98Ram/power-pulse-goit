import { NavLink } from "react-router-dom";
import CaloriesCount from "../../components/CaloriesCount";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import VideoCount from "../../components/VideoCount";
import css from "./SignUp.module.css";

export const SignUp = () => {
  return (
    <section className={css.wrapper}>
      <div className={css.container}>
        <div className={css.screen}>
          <div className={css.screen__content}>
            <h2>Sign up</h2>
            <p className={css.enterText}>
              Thank you for your interest in our platform. To complete the
              registration process, please provide us with the following
              information.
            </p>
            <SignUpForm />
            <p className={css.noaccount}>
              Already have account?
              <NavLink to="/signin">
                <span>Sign In</span>
              </NavLink>
            </p>
            <VideoCount />
            <CaloriesCount />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
