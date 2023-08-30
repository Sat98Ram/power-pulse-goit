import { useState } from "react";

// import symbolDefs from "../../../assets/images/symbol-defs.svg";
import css from "./BurgerMenu.module.css";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    const reverseIsOpen = isOpen;

    setIsOpen(!reverseIsOpen);
  };

  return (
    <div
      type="button"
      className={isOpen ? css.menuBtn : css.openMenuBtn}
      onClick={() => handleIsOpen()}
    >
      <div className={css.burgerMenuBtn}></div>
      {/* <svg className={css.burgerIcon}>
        <use href={symbolDefs + "#burger-menu-icon"}></use>
      </svg> */}
    </div>
  );
};

export default BurgerMenu;
