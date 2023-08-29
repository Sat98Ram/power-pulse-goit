import css from "./ProductsFilter.module.css"
import Select from "react-select"

export const ProductsFilter = () => {
  const optionsCategories = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
    // .map(el=>{{ value: `${el.value}`, label: `${el.value}` }})
  ]
  const optionsRec = [
    { value: "all", label: "All" },
    { value: "recommended", label: "Recommended " },
    { value: "notRecommended", label: "Not recommended" },
  ]

  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: "trasparent", // Стилизация фона окна
      height: "52px",
      appearance: "none", // Removing default appearance
      WebkitAppearance: "none",
      MozAppearance: "none",
    }),
    option: (provided, { isFocused, isSelected }) => ({
      ...provided,

      backgroundColor: isSelected
        ? "rgba(28, 28, 28, 1)"
        : isFocused
        ? "rgba(28, 28, 28, 1)"
        : "rgba(28, 28, 28, 1)", // Стилизация фона активной опции и ховера
      color: isSelected ? "#E6533C" : "#EFEDE8", // Стилизация цвета текста активной опции в списке
      padding: "14px",
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "rgba(28, 28, 28, 1)", //  фон для списка
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#EFEDE8", // Цвет текста активного селектора в окне
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      backgroundColor: "transparent", // Цвет разделителя
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: "#EFEDE8",
    }),
    container: (provided) => ({
      ...provided,
      border: "1px solid rgba(239, 237, 232, 0.30)",
      borderRadius: "12px",
      outline: "none",
    }),
    menuList: (base) => ({
      ...base,
      borderRadius: "12px", // Бордер при скроле
      // height: "276px",

      "::-webkit-scrollbar": {
        display: "none",
      },
      overflowY: "scroll",
    }),
  }

  return (
    <ul className={css.products_filter}>
      <li>
        <input type="text" />
        <button type="button">X</button>
        <button type="button">S</button>
      </li>
      <li>
        <Select
          theme={(theme) => ({
            ...theme,

            colors: {
              ...theme.colors,
              primary50: "rgba(255, 255, 255, 0.10)", // Цвет фона при нажатии на селект в меню
              primary: "transparent",
              neutral40: "#EFEDE8", // ховер на птичку
              neutral20: "transparent", // дефолтный бордер
              neutral30: "transparent", // дефолтный ховер бордер
              neutral50: "rgba(239, 237, 232, 1)", // цвет плейсхолдера
              neutral80: "rgba(239, 237, 232, 1)",
            },
          })}
          styles={customStyles}
          className={css.products_filter_select}
          options={optionsCategories}
        />
      </li>
      <li>
        <Select
          theme={(theme) => ({
            ...theme,

            colors: {
              ...theme.colors,
              primary50: "rgba(255, 255, 255, 0.10)",
              primary: "transparent",
              neutral40: "rgba(255, 255, 255, 0.60)", // ховер на птичку
              neutral20: "transparent", // бордер
              neutral30: "transparent", // ховер бордер
              neutral50: "rgba(255, 255, 255, 0.6)", // цвет плейсхолдера
              neutral80: "rgba(255, 255, 255, 0.6)",
            },
          })}
          styles={customStyles}
          className={css.products_filter_select}
          options={optionsRec}
        />
      </li>
    </ul>
  )
}
