import CaloriesCount from "../../components/CaloriesCount";
import SignInBtn from "../../components/SignInForm/SignInBtn";
import SignUpBtn from "../../components/SignUpForm/SignUpBtn";
import VideoCount from "../../components/VideoCount";
import css from "./Welcome.module.css";
import { NavLink } from "react-router-dom";
import symbolDefs from "../../assets/images/symbol-defs.svg";
const Welcome = () => {
  return (
    <div className={css.welcomeBackground}>
      <h1 className={css.title}>
        Transforming your <span className={css.lineIcon}>body</span> shape with
        Power Pulse
      </h1>
      <svg className={css.lineIcon} width="98" height="35">
        <use href={symbolDefs + "#line-icon"}></use>
      </svg>
      <div className={css.buttonsLine}>
        <NavLink to="/signup">
          <SignUpBtn />
        </NavLink>
        <NavLink to="/signin">
          <SignInBtn />
        </NavLink>
      </div>
      <VideoCount />
      <CaloriesCount />
    </div>
  );
};

export default Welcome;
