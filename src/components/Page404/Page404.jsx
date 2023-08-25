import { Link } from "react-router-dom";
import css from "./Page404.module.css";

const Page404 = () => {
  return (
    <div className={css.page404}>
      <div className={css.left}>
        <div className={css.container404}>
          <button className={css.btnLogo}>
            <Link to="/">
              <p>PowerPulse</p>
            </Link>
          </button>
          <h3>В РОЗРОБЦІ</h3>
          <p>
            Sorry, you have reached a page that we could not find. It seems that
            you are lost among the numbers and letters of our virtual space.
            Perhaps this page went on vacation or decided to disappear into
            another dimension. We apologize for this inconvenience.
          </p>
        </div>
      </div>
      <div className={css.rigth}>fgbfgbfg</div>
    </div>
  );
};

export default Page404;
