import css from "./SignInForm.module.css";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import symbolDefs from "../../assets/images/symbol-defs.svg";
import { loginThunk } from "@/redux/auth/operations";
import { SignBtn } from "../SignBtn/SignBtn";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Please enter your email")
    .matches(/^[\w.-]+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/, "Enter valid email"),
  password: Yup.string()
    .matches(
      /^(?=.*[a-zA-Z]{6})(?=.*\d)[a-zA-Z\d]{7}$/,
      "Should contain 6 symbols and at least 1 number"
    )
    .required("Please enter your password"),
});

export const SignInForm = () => {
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    dispatch(loginThunk(values));
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit,
  });

  return (
    <form className={css.signin} onSubmit={formik.handleSubmit}>
      <input
        type="email"
        name="email"
        placeholder="E-mail"
        autoComplete="username"
        className={css.signin__input}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />

      {formik.touched.email ? (
        formik.errors.email ? (
          <div className={css.errorMessage}>
            <svg className={css.errorIcon}>
              <use
                href={symbolDefs + "#checkbox-circle-fill-icon"}
                width="16"
                height="16"
              ></use>
            </svg>
            {formik.errors.email}
          </div>
        ) : (
          <div className={css.successMessage}>
            <svg className={css.successIcon}>
              <use
                href={symbolDefs + "#checkbox-circle-fill-icon"}
                width="16"
                height="16"
              ></use>
            </svg>
            Success email
          </div>
        )
      ) : null}

      <input
        type="password"
        name="password"
        placeholder="Password"
        autoComplete="new-password"
        className={css.signin__input}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
      />

      {formik.touched.password ? (
        formik.errors.password ? (
          <div className={css.errorMessage}>
            <svg className={css.errorIcon}>
              <use
                href={symbolDefs + "#checkbox-circle-fill-icon"}
                width="16"
                height="16"
              ></use>
            </svg>
            {formik.errors.password}
          </div>
        ) : (
          <div className={css.successMessage}>
            <svg className={css.successIcon}>
              <use
                href={symbolDefs + "#checkbox-circle-fill-icon"}
                width="16"
                height="16"
              ></use>
            </svg>
            Success password
          </div>
        )
      ) : null}
      <SignBtn text="Sign In" type="submit" className={css.signInBtn} />
    </form>
  );
};

export default SignInForm;
