import { NavLink, useLocation } from "react-router-dom";
import css from "./Back.module.css";

const Back = () => {
  const location = useLocation();
  const onClick = () => {
    console.log(location);
  };

  return (
    <NavLink className={css.button} onClick={onClick} aria-label="Back button">
      Back
    </NavLink>
  );
};

export default Back;
