import { useState } from "react";
import { useFormik } from "formik";

import css from "./Params.module.css";
import Container from "../../components/Container/Container";
import StepOne from "../../components/params/ParamsForm/StepOne";
import StepTwo from "../../components/params/ParamsForm/StepTwo";
import StepThree from "../../components/params/ParamsForm/StepThree";
import { TitlePage } from "../../components/TitlePage/TitlePage";

const Params = () => {
  const [step, setStep] = useState(1);

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
  });

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("result", formik.values);
    setStep((prevStep) => prevStep + 1);
  };

  const click = () => {
    console.log("formik", formik.values);
  };

  return (
    <section className={css.primary}>
      <Container>
        <TitlePage text={"Get closer to your goals!"} />
        {step === 1 && <StepOne formik={formik} submit={onSubmit} />}
        {step === 2 && (
          <StepTwo formik={formik} submit={onSubmit} prevStep={prevStep} />
        )}
        {step === 3 && <StepThree prevStep={prevStep} />}
        <button onClick={click}>FFFFFFFF</button>

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
      </Container>
    </section>
  );
};

export default Params;
