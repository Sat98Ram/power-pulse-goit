import symbolDefs from "../assets/images/symbol-defs.svg";
import css from "./VideoCount.module.css";
export const VideoCount = () => {
  return (
    <div className={css.videoCountBox}>
      <svg className={css.playSymbolIcon} width="12" height="12">
        <use href={symbolDefs + "#play-symbol-icon"}></use>
      </svg>
    </div>
  );
};

export default VideoCount;
