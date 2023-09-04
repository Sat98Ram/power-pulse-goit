import css from "./SignUpForm.module.css";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { registerThunk } from "../../redux/auth/operations";
import { SignBtn } from "../SignBtn/SignBtn";

const validationSchema = Yup.object({
  username: Yup.string().required("Please enter your name"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Please enter your email")
    .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/),
  password: Yup.string()
    .required("Please enter your password")
    .matches(
      /^(?=.*[a-zA-Z]{6})(?=.*\d)[a-zA-Z\d]{7}$/,
      "Should contain 6 symbols and at least 1 number"
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Please confirm your password"),
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

      {formik.touched.name && formik.errors.name ? (
        <div className={css.error_wrapper}>
          <div className={css.error_message}>{formik.errors.name}</div>
        </div>
      ) : null}

      <input
        type="email"
        name="email"
        placeholder="E-mail"
        autoComplete="name"
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

      <SignBtn text="Sign Up" type="submit" />
    </form>
  );
};

export default SignUpForm;
