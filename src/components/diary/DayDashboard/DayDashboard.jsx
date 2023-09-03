import { DiaryDashboardItem } from "../DiaryDashboardItem/DiaryDashboardItem";
import symbolDefs from "../../../assets/images/symbol-defs.svg";
import PropTypes from "prop-types";
import css from "./DayDashboard.module.css";

const DayDashboard = ({ diary, bodyData }) => {
  const { burnedCalories, consumedCalories, timeSport } = diary;
  const { dailyRateCalories, dailySportMin } = bodyData;

  return (
    <div className={css.day_dashboard_container}>
      <div className={css.day_dashboard}>
        <div className={css.left}>
          <DiaryDashboardItem
            svg="fork-and-knife-icon"
            title="Daily calorie intake"
            content={dailyRateCalories}
            className={css.diary_item_red}
          />
          <DiaryDashboardItem
            svg="dumbbell-icon"
            title="Daily norm of sports"
            content={dailySportMin}
            className={css.diary_item_red}
            measurement="min"
          />
        </div>
        <div className={css.rigth}>
          <div className={css.btns1}>
            <DiaryDashboardItem
              svg="apple-icon"
              title="Calories consumed"
              content={consumedCalories}
            />
            <DiaryDashboardItem
              svg="fire-icon"
              title="Calories burned"
              content={burnedCalories}
            />
          </div>
          <div className={css.btns2}>
            <DiaryDashboardItem
              svg="bubble-icon"
              title="The rest of the calories"
              content={dailyRateCalories - consumedCalories}
              type="calories"
            />
            <DiaryDashboardItem
              svg="run-icon"
              title="The rest of sports"
              content={dailySportMin - timeSport}
              type="sport"
              measurement="min"
            />
          </div>
        </div>
      </div>
      <div className={css.exclamation}>
        <div>
          <svg className={css.colorSvg} width="24" height="24">
            <use href={symbolDefs + "#exclamation-mark-icon"}></use>
          </svg>
        </div>

        <p>
          Record all your meals in a calorie diary every day. This will help me
          be aware of my nutrition and make me responsible for my choices.
        </p>
      </div>
    </div>
  );
};

export default DayDashboard;

DayDashboard.propTypes = {
  diary: PropTypes.shape({
    burnedCalories: PropTypes.number,
    consumedCalories: PropTypes.number,
    timeSport: PropTypes.number,
  }),
  bodyData: PropTypes.shape({
    dailyRateCalories: PropTypes.number,
    dailySportMin: PropTypes.number,
  }),
};
