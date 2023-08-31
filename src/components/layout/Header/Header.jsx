import { useMediaQuery } from "react-responsive";

import Container from "../../Container/Container";
import UserNav from "../UserNav/UserNav";
import css from "./Header.module.css";
import UserBar from "../UserBar/UserBar";
import Logo from "../Logo/Logo";
import { useState } from "react";
import ModalLogOut from "../ModalLogOut/ModalLogOut";
import BasicModalWindow from "../../BasicModalWindow/BasicModalWindow";
import { useDispatch } from "react-redux";
import { logoutThunk } from "../../../redux/auth/operations";

const Header = () => {
  const isDesktop = useMediaQuery({ query: "(min-width: 1440px)" });

  const [isModalLogout, setIsModalLogout] = useState(false);
  const dispatch = useDispatch();

  const showModalLogOut = () => {
    setIsModalLogout(!isModalLogout);
  };

  const handleLogOut = () => {
    dispatch(logoutThunk());
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
              <UserBar onClick={showModalLogOut} />
            </div>
          </div>
        </Container>
      </header>
      {isModalLogout && (
        <BasicModalWindow isOpenModalToggle={showModalLogOut}>
          <ModalLogOut logout={handleLogOut} />
        </BasicModalWindow>
      )}
    </>
  );
};

export default Header;
