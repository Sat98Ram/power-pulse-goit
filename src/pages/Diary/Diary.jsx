import { useDispatch } from "react-redux";
import Container from "../../components/Container/Container";
import { TitlePage } from "../../components/TitlePage/TitlePage";
import DayDashboard from "../../components/diary/DayDashboard/DayDashboard";
import DayExercises from "../../components/diary/DayExercises/DayExercises";
import DayProducts from "../../components/diary/DayProducts/DayProducts";
import DaySwitch from "../../components/diary/DaySwitch/DaySwitch";
import css from "./Diary.module.css";
import { useEffect, useState } from "react";
import { getDiariesByDateThunk } from "../../redux/diary/operations";
import { getInputValueFromDate } from "../../components/DatePickerCalendar/utils";


const Diary = () => {
  const dispatch = useDispatch();
  const [date, setDate] = useState(() => new Date());
  const dateFormat = getInputValueFromDate(date, 1);

  useEffect(() => {
    dispatch(getDiariesByDateThunk(dateFormat));
  }, [dateFormat, dispatch]);

  return (
    <section className={css.diary_page}>
      <Container>
        <header className={css.header}>
          <TitlePage text="Diary" />
          <DaySwitch date={date} setDate={setDate} />
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
