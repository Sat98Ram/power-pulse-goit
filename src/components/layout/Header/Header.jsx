import { useMediaQuery } from "react-responsive";

import Container from "../../Container/Container";
import UserNav from "../UserNav/UserNav";
import css from "./Header.module.css";
import UserBar from "../UserBar/UserBar";
import Logo from "../Logo/Logo";

const Header = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 1440px)" });
  return (
    <header className={css.header}>
      <Container>
        <div className={css.headerContent}>
          <Logo className={css.headerLogoIcon} />

          {/* {isAuth} */}
          <div className={css.authUser}>
            {isDesktop && <UserNav />}
            {/* <UserNav /> */}
            <UserBar />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
