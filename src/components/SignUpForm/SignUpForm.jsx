import SignUpBtn from "../SignUpForm/SignUpBtn";
import css from "./SignUpForm.module.css";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";

import { registerThunk } from "../../redux/auth/operations";

const validationSchema = Yup.object({
  username: Yup.string().required("Please enter your name"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Please enter your email"),
  password: Yup.string()
    .required("Please enter your password")
    .min(6, "Password must be at least 6 characters")
    .max(12, "Password should be no longer than 12 characters"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Please confirm your password"),
});

export const SignUpForm = () => {
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    const { ...payload } = values;
    dispatch(registerThunk(payload));
  };

  const formik = useFormik({
    initialValues: {
      username: "",
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
        name="username"
        placeholder="Name"
        autoComplete="username"
        className={css.signup__input}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.username}
      />

      {formik.touched.username && formik.errors.username ? (
        <div className={css.error_wrapper}>
          <div className={css.error_message}>{formik.errors.username}</div>
        </div>
      ) : null}

      <input
        type="email"
        name="email"
        placeholder="E-mail"
        autoComplete="username"
        className={css.signup__input}
        onChange={formik.handleChange}
        value={formik.values.email}
      />

      {formik.touched.email && formik.errors.email ? (
        <div className={css.error_message}>{formik.errors.email}</div>
      ) : null}

      <input
        type="password"
        name="password"
        placeholder="Password"
        autoComplete="new-password"
        className={css.signup__input}
        onChange={formik.handleChange}
        value={formik.values.password}
      />

      {formik.touched.password && formik.errors.password ? (
        <div className={css.error_message}>{formik.errors.password}</div>
      ) : null}

      <SignUpBtn />
    </form>
  );
};

export default SignUpForm;
