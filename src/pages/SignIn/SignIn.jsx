import { NavLink } from "react-router-dom";
import CaloriesCount from "../../components/CaloriesCount";
import SignInForm from "../../components/SignInForm/SignInForm";
import VideoCount from "../../components/VideoCount";
import css from "./SignIn.module.css";

export const SignIn = () => {
  return (
    <section className={css.wrapper}>
      <div className={css.container}>
        <div className={css.screen}>
          <div className={css.screen__content}>
            <h2>Sign in</h2>
            <p className={css.enterText}>
              Please enter your credentials to login to the platform:
            </p>
            <SignInForm />

            <p className={css.noaccount}>
              Don't have an account?
              <NavLink to="/signup">
                <span> Sign Up</span>
              </NavLink>
            </p>
            {/* <VideoCount />
            <CaloriesCount /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
