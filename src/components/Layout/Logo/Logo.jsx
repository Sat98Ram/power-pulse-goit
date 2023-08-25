import { NavLink } from "react-router-dom";

import symbolDefs from "../../../assets/images/symbol-defs.svg";
import css from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={css.logo}>
      <NavLink to="/diary">
        <svg width="36" height="13" className={css.logoIcon}>
          <use href={symbolDefs + "#gantelya"}></use>
        </svg>
        <svg width="82" height="12">
          <use href={symbolDefs + "#power-pulse"}></use>
        </svg>
      </NavLink>
    </div>
  );
};

export default Logo;
