import css from "../../ExersiceModalWindow/ExersiceModalWindow.module.css"

const ExersiceModalWindowList = ({ name, bodypart, target, equipment, time }) => {
  const firstLetterToUppercase = (title) => {
    return title.replace(title[0], title[0].toUpperCase());
  };
  
  return (
    <ul className={css.ExersiceModalWindowList}>
      <li className={css.ExersiceModalWindowLink}>
        <p className={css.ExersiceModalWindowLinkSub}>Name</p>
        <p className={css.ExersiceModalWindowLinkTitle}>{firstLetterToUppercase(name)}</p>
      </li>
      <li className={css.ExersiceModalWindowLink}>
        <p className={css.ExersiceModalWindowLinkSub}>Target</p>
        <p className={css.ExersiceModalWindowLinkTitle}>{firstLetterToUppercase(target)}</p>
      </li>
      <li className={css.ExersiceModalWindowLink}>
        <p className={css.ExersiceModalWindowLinkSub}>Body Part</p>
        <p className={css.ExersiceModalWindowLinkTitle}>{firstLetterToUppercase(bodypart)}</p>
      </li>
      <li className={css.ExersiceModalWindowLink}>
        <p className={css.ExersiceModalWindowLinkSub}>Equipment</p>
        <p className={css.ExersiceModalWindowLinkTitle}>{firstLetterToUppercase(equipment)}</p>
      </li>
      <li className={css.ExersiceModalWindowLink}>
        <p className={css.ExersiceModalWindowLinkSub}>Time</p>
        <p className={css.ExersiceModalWindowLinkTitle}>{time} minutes</p>
      </li>
    </ul>
  );
};

export default ExersiceModalWindowList;
