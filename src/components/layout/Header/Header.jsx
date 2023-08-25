import Container from "../../Container/Container";
import UserNav from "../UserNav/UserNav";
import css from "./Header.module.css";
import UserBar from "../UserBar/UserBar";
import Logo from "../Logo/Logo";

const Header = () => {
  return (
    <header className={css.header}>
      <Container>
        <div className={css.headerContent}>
          <Logo classNameLeft={css.logo} classNameRight={css.logoText} />

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
