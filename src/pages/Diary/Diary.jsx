import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Container from "../../components/Container/Container";
import { TitlePage } from "../../components/TitlePage/TitlePage";
import DayDashboard from "../../components/diary/DayDashboard/DayDashboard";
import DayExercises from "../../components/diary/DayExercises/DayExercises";
import DayProducts from "../../components/diary/DayProducts/DayProducts";
import DaySwitch from "../../components/diary/DaySwitch/DaySwitch";
import css from "./Diary.module.css";

import { getDiariesByDateThunk } from "../../redux/diary/operations";
import { getInputValueFromDate } from "../../components/DatePickerCalendar/utils";
import { selectDiary } from "../../redux/diary/selectors";
import { selectUser } from "../../redux/auth/selectors";

const Diary = () => {
  const dispatch = useDispatch();

  const diary = useSelector(selectDiary);
  const user = useSelector(selectUser);
  const [date, setDate] = useState(() => new Date());

  useEffect(() => {
    dispatch(getDiariesByDateThunk(getInputValueFromDate(date, 1)));
  }, [date, dispatch]);

  const { bodyData, createdAt } = user;
  const { blood } = bodyData;

  const { consumedProducts, doneExercises } = diary;

  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <section className={css.diary_page}>
      <Container>
        <div className={css.header}>
          <TitlePage text="Diary" />
          <DaySwitch date={date} setDate={setDate} minDate={createdAt} />
        </div>

        <div className={css.content}>
          <div className={css.tables}>
            {consumedProducts && (
              <DayProducts
                isMobile={isMobile}
                consumedProducts={consumedProducts}
                date={diary.date}
                blood={blood}
              />
            )}
            {doneExercises && (
              <DayExercises
                isMobile={isMobile}
                doneExercises={doneExercises}
                date={diary.date}
              />
            )}
          </div>
          <DayDashboard diary={diary} bodyData={bodyData} />
        </div>
      </Container>
    </section>
  );
};

export default Diary;
