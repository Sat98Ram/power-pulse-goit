import css from "./SignInForm.module.css";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";

import SignInBtn from "./SignInBtn";
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

export const SignInForm = () => {
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    const { confirmPassword, ...payload } = values;
    dispatch(registerThunk(payload));
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit,
  });
  return (
    <form className={css.login} onSubmit={formik.handleSubmit}>
      <div className={css.login__field}>
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          autoComplete="username"
          className={css.login__input}
          onChange={formik.handleChange}
          value={formik.values.email}
        />
      </div>
      {formik.touched.email && formik.errors.email ? (
        <div className={css.error_message}>{formik.errors.email}</div>
      ) : null}
      <input
        type="password"
        name="password"
        placeholder="Password"
        autoComplete="new-password"
        className={css.login__input}
        onChange={formik.handleChange}
        value={formik.values.password}
      />

      {formik.touched.password && formik.errors.password ? (
        <div className={css.error_message}>{formik.errors.password}</div>
      ) : null}
      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm password"
        autoComplete="new-password"
        className={css.login__input}
        onChange={formik.handleChange}
        value={formik.values.confirmPassword}
      />

      {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
        <div className={css.error_message}>{formik.errors.confirmPassword}</div>
      ) : null}

      <input
        type="text"
        name="username"
        placeholder="First name"
        autoComplete="username"
        className={css.login__input}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.username}
      />

      {formik.touched.username && formik.errors.username ? (
        <div className={css.error_wrapper}>
          <div className={css.error_message}>{formik.errors.username}</div>
        </div>
      ) : null}
      <SignInBtn />
    </form>
  );
};

export default SignInForm;
