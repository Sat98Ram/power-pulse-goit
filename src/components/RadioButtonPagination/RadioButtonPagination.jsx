import PropTypes from "prop-types";
import "./index.scss";

const RadioButtonPagination = ({ page, handleClickId, currentPage }) => {
  const IconGroup = (props) => {
    const { i, onClick } = props;

    return (
      <div className="radio">
        <input
          id={`radio-${i}`}
          name="radio"
          type="radio"
          value={i}
          onChange={onClick}
          checked={i + 1 === currentPage}
        />
        <label htmlFor={`radio-${i}`} className="radioLabel"></label>
      </div>
    );
  };
  const forEachIcon = (page) => {
    let icons = [];
    for (let i = 0; i < page; i++) {
      icons = [
        ...icons,

        <IconGroup key={i} i={i} onClick={() => handleClickId(i + 1)} />,
      ];
    }

    return icons;
  };
  return <div className="pagination">{forEachIcon(page)}</div>;
};

export default RadioButtonPagination;

RadioButtonPagination.propTypes = {
  page: PropTypes.number,
  handleClickId: PropTypes.func,
  i: PropTypes.number,
  onClick: PropTypes.func,
  currentPage: PropTypes.number,
};
