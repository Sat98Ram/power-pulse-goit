import { NavLink } from "react-router-dom";

export const UserNav = () => {
  return (
    <>
      <nav>
        <NavLink>Diary</NavLink>
        <NavLink>Products</NavLink>
        <NavLink>Exercises</NavLink>
      </nav>
    </>
  );
};
