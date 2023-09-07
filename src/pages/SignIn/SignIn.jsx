import { NavLink } from "react-router-dom";
import SignInForm from "../../components/SignInForm/SignInForm";
// import { GoogleLogin } from "@react-oauth/google";
import css from "./SignIn.module.css";
import Container from "../../components/Container/Container";

export const SignIn = () => {
  return (
    <section className={css.backGround}>
      <Container>
        <div className={css.screen}>
          <div className={css.screen__content}>
            <h2>Sign in</h2>
            <p className={css.enterText}>
              Please enter your credentials to login to the platform:
            </p>
            <SignInForm />

            {/* <GoogleLogin
              auto_select="true"
              onSuccess={(credentialResponse) => {
                console.log(credentialResponse);
              }}
              onError={() => {
                console.log("Login Failed");
              }}
            /> */}
            <p className={css.noaccount}>
              Don't have an account?
              <NavLink to="/signup"> Sign Up</NavLink>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SignIn;
