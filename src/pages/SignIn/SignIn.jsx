import { NavLink } from "react-router-dom";
import SignInForm from "../../components/SignInForm/SignInForm";
import css from "./SignIn.module.css";
import symbolDefs from "../../assets/images/symbol-defs.svg";
export const SignIn = () => {
  return (
    <section className={css.wrapper}>
      <div className={css.container}>
        <div className={css.screen}>
          <div className={css.screen__content}>
            <NavLink to="/" className={css.logo}>
              <svg className={css.logoSvg}>
                <use href={symbolDefs + "#power-pulse"}></use>
              </svg>
              <svg className={css.logoSvg}>
                <use href={symbolDefs + "#gantelya"}></use>
              </svg>
            </NavLink>
            <h1 className={css.title}>Sign Up</h1>
            <SignInForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
