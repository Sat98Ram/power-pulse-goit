import css from "./CloseSvg.module.css";
import PropTypes from "prop-types";
// import Svg from "./x.svg";
// import { ReactComponentElement as Close } from "./x.svg";

const CloseSvg = ({ className, onClick }) => {
  return (
    <button className={`${className} ${css.closeSvg}`} onClick={onClick}>
      <svg
        className={css.svg}
        // width="22"
        // height="22"
        viewBox="0 0 22 22"
        //fill="inherit"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.5 5.5L5.5 16.5"
          // stroke="#EFEDE8"
          // stroke-width="2"
          // stroke-linecap="round"
          // stroke-linejoin="round"
        />
        <path
          d="M5.5 5.5L16.5 16.5"
          // stroke="#EFEDE8"
          // stroke-width="2"
          // stroke-linecap="round"
          // stroke-linejoin="round"
        />
      </svg>

      {/* <img src={Svg} style={{ width: "40px" }} alt="" /> */}
    </button>
  );
};

export default CloseSvg;

CloseSvg.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};
