import React from "react";
import css from "./SignInForm.module.css";
export const SignInBtn = () => {
  return (
    <button className={css.signInBtn} type="button">
      sign in
    </button>
  );
};

export default SignInBtn;
