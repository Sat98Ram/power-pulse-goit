import { useEffect } from "react"
import { ProductsItem } from "../ProductsItem/ProductsItem"
import css from "./ProductsList.module.css"
import { useDispatch, useSelector } from "react-redux"
import { selectFilter, selectProductsList } from "../../../redux/products/selectors"
import { productListThunk } from "../../../redux/products/operation"
import { selectBloodType } from "../../../redux/auth/selectors"
import { SearchNotResult } from "../searchNotResult/searchNotResult"

// const product = {
//   _id: "5d51694902b2373622ff5ccf",
//   weight: 100,
//   calories: 110,
//   category: "dried fruits",
//   title: "Dried rosehip",
//   groupBloodNotAllowed: {
//     1: false,
//     2: false,
//     3: false,
//     4: false,
//   },
// }

const filterProducts = (listProducts, filter) => {
  const { category, recommended } = filter
  const search = filter.search ? filter.search.toLowerCase() : undefined

  // console.log("filter", filter, "/////", "recommended", recommended)

  const stepOne = category ? listProducts.filter((el) => el.category === category) : listProducts
  const stepTwo =
    recommended === "recommended"
      ? stepOne.filter((el) => el.recommended)
      : recommended === "notRecommended"
      ? stepOne.filter((el) => !el.recommended)
      : stepOne
  const stepThree = search
    ? stepTwo.filter((el) => el.title.toLowerCase().includes(search))
    : stepTwo

  return stepThree
}

export const ProductsList = () => {
  const dispatch = useDispatch()
  const filter = useSelector(selectFilter)
  const bloodType = useSelector(selectBloodType)

  const productsList = useSelector(selectProductsList).map((el) => ({
    ...el,
    recommended: el.groupBloodNotAllowed[bloodType],
  }))
  // console.log(productsList)
  const filteredList = filterProducts(productsList, filter)
  console.log(filteredList)

  useEffect(() => {
    dispatch(productListThunk())
  }, [dispatch])

  return (
    <>
      {filteredList.length > 0 ? (
        <ul className={css.products_list}>
          {filteredList &&
            filteredList.slice(0, 20).map((el) => <ProductsItem key={el.title} el={el} />)}
        </ul>
      ) : (
        <SearchNotResult />
      )}
    </>
  )
}
