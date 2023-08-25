import SignInBtn from "../../components/SignInForm/SignInBtn";
import SignUpBtn from "../../components/SignUpForm/SignUpBtn";
import VideoCount from "../../components/VideoCount";
import css from "./Welcome.module.css";
const Welcome = () => {
  return (
    <div className={css.welcomeBackground}>
      <h1>Transforming your body shape with Power Pulse</h1>
      <div className={css.buttonsLine}>
        <SignUpBtn />
        <SignInBtn />
      </div>
      <VideoCount />
    </div>
  );
};

export default Welcome;
