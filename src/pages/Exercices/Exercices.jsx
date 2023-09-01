import Container from "../../components/Container/Container";
import { TitlePage } from "../../components/TitlePage/TitlePage";
import css from "./Exercices.module.css";
import ExercisesCategories from "../../components/exercises/ExercisesCategories/ExercisesCategories";
import { Outlet } from "react-router-dom";
import { SuccessModalWindow } from "../../components/ExersiceModalWindow/SuccessModalWindow/SuccessModalWindow";

const Exercises = () => {
  return (
    <section className={css.exercises}>
      <Container>
        <header className={css.header}>
          <TitlePage text="Exercises" />
          <ExercisesCategories />
          <SuccessModalWindow/>
        </header>
        <Outlet />
      </Container>
    </section>
  );
};

export default Exercises;
