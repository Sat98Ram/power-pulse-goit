import { useState } from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";

import css from "./Params.module.css";

import Container from "../../components/Container/Container";
import StepOne from "../../components/params/ParamsForm/StepOne";
import StepTwo from "../../components/params/ParamsForm/StepTwo";
import StepThree from "../../components/params/ParamsForm/StepThree";
import { TitlePage } from "../../components/TitlePage/TitlePage";
import VideoCount from "../../components/VideoCount";
import CaloriesCount from "../../components/CaloriesCount";
import { updateBodyThunk } from "../../redux/auth/operations";

const date = new Date(new Date() - 18 * 365.25 * 24 * 60 * 60 * 1000);

const validationSchema = Yup.object({
  height: Yup.number()
    .required("Enter your height")
    .min(150, "Min. height 150 cm."),
  currentWeight: Yup.number()
    .required("Enter your current weight")
    .min(35, "Min. current weight 35 kg"),
  desiredWeight: Yup.number()
    .required("Enter your desired weight")
    .min(35, "Min. desired weight 35 kg"),
  birthday: Yup.date().required("Enter your birthday"),
  blood: Yup.number().required("Please enter your blood"),
  sex: Yup.mixed().oneOf(["male", "female"]).required("Please enter your sex"),
  levelActivity: Yup.number().required("Please enter your level activity"),
});

const bgImg = [css.stepOneBg, css.stepTwoBg, css.stepThreeBg];

const Params = () => {
  const [step, setStep] = useState(1);

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      height: "",
      currentWeight: "",
      desiredWeight: "",
      birthday: date,
      blood: 1,
      sex: "male",
      levelActivity: 1,
    },

    validationSchema,
    onSubmit: (values) => {
      dispatch(updateBodyThunk(values));
    },
  });

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  return (
    <section className={`${css.primary} ${bgImg[step - 1]}`}>
      <Container className={css.container}>
        <form onSubmit={formik.handleSubmit}>
          {step !== 3 && <TitlePage text={"Get closer to your goals!"} />}
          {step === 1 && <StepOne formik={formik} nextStep={nextStep} />}
          {step === 2 && (
            <StepTwo formik={formik} nextStep={nextStep} prevStep={prevStep} />
          )}
          {step === 3 && <StepThree prevStep={prevStep} />}
        </form>

        <ul className={css.paginationWraper}>
          <li
            className={`${step === 1 ? css.paginationActive : css.pagination} ${
              step !== 1 && css.paginationCompleted
            }`}
          ></li>
          <li
            className={`${step === 2 ? css.paginationActive : css.pagination} ${
              step === 3 && css.paginationCompleted
            }`}
          ></li>
          <li
            className={step === 3 ? css.paginationActive : css.pagination}
          ></li>
        </ul>
        <VideoCount className={css.videoCount} />
        <CaloriesCount className={css.caloriesCount} />
      </Container>
    </section>
  );
};

export default Params;
