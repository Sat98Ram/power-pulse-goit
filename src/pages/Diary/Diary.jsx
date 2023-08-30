import Container from "../../components/Container/Container";
import { TitlePage } from "../../components/TitlePage/TitlePage";
import DayDashboard from "../../components/diary/DayDashboard/DayDashboard";
import DayExercises from "../../components/diary/DayExercises/DayExercises";
import DayProducts from "../../components/diary/DayProducts/DayProducts";
import DaySwitch from "../../components/diary/DaySwitch/DaySwitch";
import css from "./Diary.module.css";
const Diary = () => {
  return (
    <section className={css.diary_page}>
      <Container>
        <header className={css.header}>
          <TitlePage text="Diary" />
          <DaySwitch />
        </header>
        <div className={css.content}>
          <div className={css.tables}>
            <DayProducts />
            <DayExercises />
          </div>
          <DayDashboard />
        </div>
      </Container>
    </section>
  );
};

export default Diary;
