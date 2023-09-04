import Container from "../../components/Container/Container";
import { SignBtn } from "../../components/SignBtn/SignBtn";
import SignInBtn from "../../components/SignInForm/SignInBtn";
import SignUpBtn from "../../components/SignUpForm/SignUpBtn";
import css from "./Welcome.module.css";

import { NavLink } from "react-router-dom";
// import symbolDefs from "../../assets/images/symbol-defs.svg";
const Welcome = () => {
  return (
    <section className={css.welcomeBackground}>
      <Container>
        <h1 className={css.title}>
          Transforming your <span className={css.bodyLine}>body</span> shape
          with Power Pulse
        </h1>

        <div className={css.buttonsLine}>
          <NavLink to="/signin">
            <SignBtn text="Sign In" type="button" className={css.signUpBtn} />
          </NavLink>
          <NavLink to="/signup">
            <SignBtn text="Sign Up" type="button" className={css.signInBtn} />
          </NavLink>
        </div>
        {/* <VideoCount />
      <CaloriesCount /> */}
      </Container>
    </section>
  );
};

export default Welcome;
