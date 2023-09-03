import Container from "../../components/Container/Container";
import { TitlePage } from "../../components/TitlePage/TitlePage";
import css from "./Exercices.module.css";
import ExercisesCategories from "../../components/exercises/ExercisesCategories/ExercisesCategories";
import { Outlet, useLocation } from "react-router-dom";
import Back from "@/components/exercises/Back/Back";

const Exercises = () => {
  const { pathname } = useLocation();
  const isExersicesList = pathname.split("/").pop() === "list";

  return (
    <section
      className={isExersicesList ? `${css.section} ${css.list}` : css.section}
    >
      <Container>
        {isExersicesList && <Back />}
        <div className={css.header}>
          <TitlePage text="Exercises" />
          <ExercisesCategories />
        </div>
        <Outlet />
      </Container>
    </section>
  );
};

export default Exercises;
