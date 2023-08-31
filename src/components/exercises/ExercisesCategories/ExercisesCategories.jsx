import { NavLink } from "react-router-dom";
import css from "./ExercisesCategories.module.css";
const ExercisesCategories = () => {
  const setActive = ({ isActive }) =>
    isActive ? `${css.active} ${css.link_style} ` : `${css.link_style} `;
  return (
    <ul className={css.blok_ul}>
      <li className={css.link}>
        <NavLink to="bodyparts" className={setActive}>
          <p>Body parts</p>
        </NavLink>
        <NavLink to="muscules" className={setActive}>
          <p>Muscles</p>
        </NavLink>
        <NavLink to="equipments" className={setActive}>
          <p>Equipment</p>
        </NavLink>
      </li>
    </ul>
  );
};

export default ExercisesCategories;
