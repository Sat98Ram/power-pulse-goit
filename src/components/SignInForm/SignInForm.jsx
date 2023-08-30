import css from "./SignInForm.module.css";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";

import SignInBtn from "./SignInBtn";
import { loginThunk } from "@/redux/auth/operations";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Please enter your email"),
  password: Yup.string()
    .required("Please enter your password")
    .min(6, "Password must be at least 6 characters")
    .max(12, "Password should be no longer than 12 characters"),
});

export const SignInForm = () => {
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    dispatch(loginThunk(values));
  };

  const formik = useFormik({
    initialValues: {
      email: "newemail@example.com",
      password: "abcdef6",
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
        className={css.signin__input}
        onChange={formik.handleChange}
        value={formik.values.password}
      />

      {formik.touched.password && formik.errors.password ? (
        <div className={css.error_message}>{formik.errors.password}</div>
      ) : null}
      <SignInBtn />
    </form>
  );
};

export default SignInForm;
