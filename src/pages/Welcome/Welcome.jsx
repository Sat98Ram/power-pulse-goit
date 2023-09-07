import Container from "../../components/Container/Container";
import { SignBtn } from "../../components/SignBtn/SignBtn";
import css from "./Welcome.module.css";

import { NavLink } from "react-router-dom";

const googleAuth = "https://powerpulse-y0gd.onrender.com/api/users/google";

const Welcome = () => {
  return (
    <section className={css.welcomeBackground}>
      <Container>
        <h1 className={css.title}>
          Transforming your <span className={css.bodyLine}>body</span> shape
          with Power Pulse
        </h1>

        <div className={css.buttonsLine}>
          <NavLink to="/signup">
            <SignBtn text="Sign Up" type="button" className={css.signUpBtn} />
          </NavLink>
          <NavLink to="/signin">
            <SignBtn text="Sign In" type="button" className={css.signInBtn} />
          </NavLink>
          <a
            href={googleAuth}
            aria-label="authenticante with google"
            className={css.signInBtn}
          >
            Signin with Google
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Welcome;
