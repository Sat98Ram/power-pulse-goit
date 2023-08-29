import React from "react"
import { ProductsItem } from "../ProductsItem/ProductsItem"
import css from "./ProductsList.module.css"

const aa = [
  {
    _id: {
      $oid: "5d51694902b2373622ff5773",
    },
    weight: 100,
    calories: 340,
    category: "dairy",
    title: "Danbo cheese",
    groupBloodNotAllowed: {
      1: true,
      2: true,
      3: false,
      4: false,
    },
  },
  {
    _id: {
      $oid: "5d51694902b2373622ff5b7f",
    },
    weight: 100,
    calories: 112,
    category: "fish",
    title: "marlin",
    groupBloodNotAllowed: {
      1: false,
      2: false,
      3: false,
      4: false,
    },
  },
  {
    _id: {
      $oid: "5d51694902b2373622ff5e13",
    },
    weight: 100,
    calories: 17,
    category: "vegetables and herbs",
    title: "Salads Belaya Dacha Delicate root",
    groupBloodNotAllowed: {
      1: false,
      2: false,
      3: false,
      4: false,
    },
  },
]
export const ProductsList = () => {
  return (
    <ul className={css.products_list}>
      {aa.map((el) => (
        <ProductsItem key={el.title} el={el} />
      ))}
    </ul>
  )
}
