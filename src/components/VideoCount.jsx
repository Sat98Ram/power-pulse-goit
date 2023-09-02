import PropTypes from "prop-types";
import symbolDefs from "../assets/images/symbol-defs.svg";
import css from "./VideoCount.module.css";

export const VideoCount = ({ className = "" }) => {
  return (
    <div className={`${css.videoCountBox} ${className}`}>
      <div className={css.videoCountBack}>
        <svg className={css.videoPlayIcon} width="12" height="12">
          <use href={symbolDefs + "#play-symbol-icon"}></use>
        </svg>
      </div>
      <div>
        <p className={css.videoCount}>350+</p>
        <p className={css.videoTutorial}>Video tutorial</p>
      </div>
    </div>
  );
};

export default VideoCount;

VideoCount.propTypes = {
  className: PropTypes.string,
};
