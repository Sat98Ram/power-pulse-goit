import Container from "../../components/Container/Container";
import { TitlePage } from "../../components/TitlePage/TitlePage";
import css from "./Exercices.module.css";
import ExercisesCategories from "../../components/exercises/ExercisesCategories/ExercisesCategories";
import { Outlet, useLocation } from "react-router-dom";
import Back from "@/components/exercises/Back/Back";

const Exercises = () => {
  const location = useLocation();
  console.log(location);
  return (
    <section className={css.exercises}>
      <Container>
        <Back />
        <header className={css.header}>
          <TitlePage text="Exercises" />
          <ExercisesCategories />
        </header>
        <Outlet />
      </Container>
    </section>
  );
};

export default Exercises;
