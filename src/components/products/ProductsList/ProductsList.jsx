import React, { useEffect } from "react"
import { ProductsItem } from "../ProductsItem/ProductsItem"
import css from "./ProductsList.module.css"
import { useDispatch, useSelector } from "react-redux"
import { selectProductsList } from "../../../redux/products/selectors"
import { productListThunk } from "../../../redux/products/operation"

export const ProductsList = () => {
  const dispatch = useDispatch()
  const productsList = useSelector(selectProductsList)
  useEffect(() => {
    dispatch(productListThunk())
  }, [dispatch])
  console.log(productsList)
  return (
    <ul className={css.products_list}>
      {productsList && productsList.map((el) => <ProductsItem key={el.title} el={el} />)}
    </ul>
  )
}
