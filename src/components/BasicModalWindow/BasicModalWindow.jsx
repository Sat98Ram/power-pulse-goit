import PropTypes from "prop-types";
import css from "./BasicModalWindow.module.css";
import { createPortal } from "react-dom";
import { useEffect } from "react";

const BasicModalWindow = ({ children, isOpenModalToggle }) => {
  useEffect(() => {
    const closeESC = (e) => {
      if (e.code === "Escape") {
        isOpenModalToggle();
      }
    };
    document.addEventListener("keydown", closeESC);
    return () => {
      document.removeEventListener("keydown", closeESC);
    };
  }, []);

  const handleClickBackground = (e) => {
    if (e.target.className.includes("basic_modal_window")) {
      isOpenModalToggle();
    }
  };

  const modal = (
    <div className={css.basic_modal_window} onClick={handleClickBackground}>
      {children}
    </div>
  );

  return createPortal(modal, document.querySelector("#portal_modal"));
};

export default BasicModalWindow;

BasicModalWindow.propTypes = {
  children: PropTypes.any,
  isOpenModaltoggle: PropTypes.func,
};
