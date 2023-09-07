import css from "./SignUpForm.module.css";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { registerThunk } from "../../redux/auth/operations";
import { SignBtn } from "../SignBtn/SignBtn";
import symbolDefs from "../../assets/images/symbol-defs.svg";

const validationSchema = Yup.object({
  name: Yup.string().required("Please enter your name"),
  email: Yup.string()

    .required("Please enter your email")
    .matches(/^[\w.-]+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/, "Enter valid email"),
  password: Yup.string()
    .required("Please enter your password")
    .matches(
      /^(?=.*[a-zA-Z]{6})(?=.*\d)[a-zA-Z\d]{7}$/,
      "Should contain 6 symbols and at least 1 number"
    ),
});

export const SignUpForm = () => {
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    dispatch(registerThunk(values));
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit,
  });

  return (
    <form className={css.signup} onSubmit={formik.handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        autoComplete="name"
        className={css.signup__input}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
      />

      <input
        type="email"
        name="email"
        placeholder="E-mail"
        autoComplete="email"
        className={css.signup__input}
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
        className={css.signup__input}
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
      <SignBtn text="Sign Up" type="submit" className={css.signUpBtn} />
    </form>
  );
};

export default SignUpForm;
