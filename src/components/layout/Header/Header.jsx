import { useMediaQuery } from "react-responsive";

import Container from "../../Container/Container";
import UserNav from "../UserNav/UserNav";
import css from "./Header.module.css";
import UserBar from "../UserBar/UserBar";
import Logo from "../Logo/Logo";
import { useState } from "react";
import ModalLogOut from "../ModalLogOut/ModalLogOut";
import BasicModalWindow from "../../BasicModalWindow/BasicModalWindow";

const Header = () => {
  // const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 1440px)" });

  const [isModalLogout, setIsModalLogout] = useState(false);

  const handleLogOut = () => {
    setIsModalLogout(!isModalLogout);
  };

  return (
    <>
      <header className={css.header}>
        <Container>
          <div className={css.headerContent}>
            <Logo className={css.headerLogoIcon} />

            {/* {isAuth} */}
            <div className={css.authUser}>
              {isDesktop && <UserNav />}
              {/* <UserNav /> */}
              <UserBar onClick={handleLogOut} />
            </div>
          </div>
        </Container>
      </header>
      {isModalLogout && (
        <BasicModalWindow isOpenModalToggle={handleLogOut}>
          <ModalLogOut />
        </BasicModalWindow>
      )}
    </>
  );
};

export default Header;
