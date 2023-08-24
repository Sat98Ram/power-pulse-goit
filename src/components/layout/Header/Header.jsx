import { NavLink } from "react-router-dom";
import Container from "../../Container/Container";
import UserNav from "../UserNav/UserNav";
import css from "./Header.module.css";
import UserBar from "../UserBar/UserBar";

const Header = () => {
  return (
    <header className={css.header}>
      <Container>
        <div className={css.headerContent}>
          <NavLink to="/diary">Logo will be there</NavLink>

          {/* {isAuth} */}
          <div className={css.authUser}>
            <UserNav />
            <UserBar />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
