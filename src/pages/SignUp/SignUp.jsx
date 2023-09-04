import { NavLink } from "react-router-dom";

import SignUpForm from "../../components/SignUpForm/SignUpForm";

import css from "./SignUp.module.css";
import Container from "../../components/Container/Container";

export const SignUp = () => {
  return (
    <section className={css.backGround}>
      <Container>
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
              <NavLink to="/signin"> Sign In</NavLink>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SignUp;
