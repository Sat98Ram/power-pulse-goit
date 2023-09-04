import Container from "../../components/Container/Container";
import SignInBtn from "../../components/SignInForm/SignInBtn";
import SignUpBtn from "../../components/SignUpForm/SignUpBtn";
import css from "./Welcome.module.css";

import { NavLink } from "react-router-dom";
// import symbolDefs from "../../assets/images/symbol-defs.svg";
const Welcome = () => {
  return (
    <Container className={css.container}>
      <div className={`${css.linePosition} ${css.welcomeBackground}`}>
        <h1 className={css.title}>
          Transforming your <span className={css.bodyLine}>body</span> shape
          with Power Pulse
        </h1>
      </div>
      <div className={css.buttonsLine}>
        <NavLink to="/signup">
          <SignUpBtn />
        </NavLink>
        <NavLink to="/signin">
          <SignInBtn />
        </NavLink>
      </div>
      {/* <VideoCount />
      <CaloriesCount /> */}
    </Container>
  );
};

export default Welcome;
