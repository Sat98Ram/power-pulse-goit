import { DiaryDashboardItem } from "../DiaryDashboardItem/DiaryDashboardItem";
import css from "./DayDashboard.module.css";

const DayDashboard = () => {
  return (
    <div className={css.day_dashboard}>
      <div className={css.left}>
        <DiaryDashboardItem
          svg="s"
          title="Daily calorie intake"
          content="2200"
          className={css.diary_item_red}
        />
        <DiaryDashboardItem
          svg="s"
          title="Daily norm of sports"
          content="110 min"
          className={css.diary_item_red}
        />
      </div>
      <div className={css.rigth}>
        <div className={css.btns1}>
          <DiaryDashboardItem svg="s" title="Calories consumed" content="707" />
          <DiaryDashboardItem svg="s" title="Calories burned" content="855" />
        </div>
        <div className={css.btns2}>
          <DiaryDashboardItem
            svg="s"
            title="The rest of the calories"
            content="1493"
          />
          <DiaryDashboardItem
            svg="s"
            title="The rest of sports"
            content="85 min"
          />
        </div>
      </div>
    </div>
  );
};

export default DayDashboard;
