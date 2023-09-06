import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { useLocation } from "react-router-dom";
import { useState } from "react";

import { logoutThunk } from "../../../redux/auth/operations";
import { selectIsAuth } from "../../../redux/auth/selectors";
import BasicModalWindow from "../../BasicModalWindow/BasicModalWindow";
import ModalLogOut from "../ModalLogOut/ModalLogOut";
import Container from "../../Container/Container";
import UserNav from "../UserNav/UserNav";
import UserBar from "../UserBar/UserBar";
import Logo from "../Logo/Logo";
import css from "./Header.module.css";

const Header = () => {
  const isDesktop = useMediaQuery({ query: "(min-width: 1440px)" });

  const isAuth = useSelector(selectIsAuth);
  const [isModalLogout, setIsModalLogout] = useState(false);
  const dispatch = useDispatch();

  const showModalLogOut = () => {
    setIsModalLogout((prev) => !prev);
  };

  const handleLogOut = () => {
    dispatch(logoutThunk());

    showModalLogOut();
  };

  const location = useLocation();
  const currentPath = location.pathname;

  const headerClass =
    !isAuth || currentPath === "/params" ? css.headerNotAuth : css.headerAuth;

  return (
    <>
      <header className={headerClass}>
        <Container>
          <div className={css.headerContent}>
            <Logo className={css.headerLogoIcon} />

            {isAuth && currentPath !== "/params" && (
              <div className={css.authUser}>
                {isDesktop && (
                  <UserNav
                    className={css.headerNav}
                    classNameLink={({ isActive }) =>
                      isActive ? css.userNavLinkActive : css.userNavLink
                    }
                  />
                )}

                <UserBar
                  onClick={showModalLogOut}
                  isModalLogout={isModalLogout}
                  showModalLogOut={showModalLogOut}
                />
              </div>
            )}
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
