import { useNavigate } from "react-router-dom";
import css from "./Page404.module.css";
import { SignBtn } from "../SignBtn/SignBtn";
import { useEffect } from "react";

const Page404 = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      navigate("/");
    }, 4000);
    return () => clearTimeout(timerId);
  }, [navigate]);
  return (
    <section className={css.section}>
      <div className={css.left}>
        <div className={css.content}>
          <h3 className={css.title404}>404</h3>
          <p className={css.text404}>
            Sorry, you have reached a page that we could not find. It seems that
            you are lost among the numbers and letters of our virtual space.
            Perhaps this page went on vacation or decided to disappear into
            another dimension. We apologize for this inconvenience.
          </p>
          <SignBtn
            className={css.btn}
            text="Go Home"
            type="button"
            onClick={handleClick}
          />
        </div>
      </div>
    </section>
  );
};

export default Page404;
