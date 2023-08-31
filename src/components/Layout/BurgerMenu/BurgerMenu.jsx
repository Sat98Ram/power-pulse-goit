import { useState } from "react";
import PropTypes from "prop-types";

import symbolDefs from "../../../assets/images/symbol-defs.svg";
import css from "./BurgerMenu.module.css";

const BurgerMenu = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen(true);
  };

  const handleClosed = () => {
    setIsOpen(false);
  };

  return (
    <>
      {!isOpen && (
        <button
          type="button"
          className={css.menuBtn}
          onClick={() => handleIsOpen()}
          aria-label="open menu"
        >
          <svg className={css.burgerIcon}>
            <use href={symbolDefs + "#burger-menu-icon"}></use>
          </svg>
        </button>
      )}

      {isOpen && (
        <div className={css.burgerMenu}>
          <button
            type="button"
            className={css.menuCloseBtn}
            onClick={() => handleClosed()}
            aria-label="close menu"
          >
            <svg className={css.closeMenuIcon}>
              <use href={symbolDefs + "#close-icon"}></use>
            </svg>
          </button>

          {children}
        </div>
      )}
    </>
  );
};

export default BurgerMenu;

BurgerMenu.propTypes = {
  children: PropTypes.node,
};
