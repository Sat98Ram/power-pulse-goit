import css from "./SignInForm.module.css";
export const SignInBtn = () => {
  return (
    <button className={css.signInBtn} type="submit">
      sign in
    </button>
  );
};

export default SignInBtn;
