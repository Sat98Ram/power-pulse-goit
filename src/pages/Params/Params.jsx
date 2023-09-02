import { useState } from "react";
import { useFormik } from "formik";

import css from "./Params.module.css";
import Container from "../../components/Container/Container";
import StepOne from "../../components/params/ParamsForm/StepOne";
import StepTwo from "../../components/params/ParamsForm/StepTwo";
import StepThree from "../../components/params/ParamsForm/StepThree";
import { TitlePage } from "../../components/TitlePage/TitlePage";

// import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { updateBodyParams } from "../../redux/auth/slice";
import VideoCount from "../../components/VideoCount";
import CaloriesCount from "../../components/CaloriesCount";

// const validationSchema = Yup.object({
//   height: Yup.number()
//     .required("Please enter your height")
//     .min(150, "Height must be at least 150 сm"),
//   currentWeight: Yup.number()
//     .required("Please enter your current weight")
//     .min(35, "Current weight must be at least 35 kg"),
//   desiredWeight: Yup.number()
//     .required("Please enter your desired weight")
//     .min(35, "Desired weight must be at least 35 kg"),
//   birthday: Yup.date().required("Please enter your birthday"),
//   // .min(18, "Height must be at least 150 sm"),
//   blood: Yup.number().required("Please enter your blood"),
//   sex: Yup.number().required("Please enter your sex"),
//   levelActivity: Yup.number().required("Please enter your level activity"),
// });

const bgImg = [css.stepOneBg, css.stepTwoBg, css.stepThreeBg];

const Params = () => {
  const [step, setStep] = useState(1);
  // const [date, setDate] = useState(new Date());
  // console.log("date", date);

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      height: "",
      currentWeight: "",
      desiredWeight: "",
      birthday: "",
      blood: "",
      sex: "",
      levelActivity: "",
    },

    // validationSchema,
    // onSubmit,
  });

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("result", formik.values);
    setStep((prevStep) => prevStep + 1);
    dispatch(updateBodyParams(formik.values));
  };

  return (
    <section className={`${css.primary} ${bgImg[step - 1]}`}>
      <Container className={css.container}>
        <div>
          {step !== 3 && <TitlePage text={"Get closer to your goals!"} />}
          {step === 1 && (
            <StepOne
              formik={formik}
              submit={onSubmit}
              // date={date}
              // setDate={setDate}
            />
          )}
          {step === 2 && (
            <StepTwo formik={formik} submit={onSubmit} prevStep={prevStep} />
          )}
          {step === 3 && <StepThree prevStep={prevStep} />}
        </div>

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
