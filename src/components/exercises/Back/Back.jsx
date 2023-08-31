import { NavLink, useLocation } from "react-router-dom";
import css from "./Back.module.css";

const Back = () => {
  const { state } = useLocation();
  const onClick = () => {
    console.log(state);
  };

  return (
    <NavLink
      className={css.button}
      to={state?.from ? state.from.pathname : "/exercises"}
      onClick={onClick}
      aria-label="Back button"
    >
      Back
    </NavLink>
  );
};

export default Back;
