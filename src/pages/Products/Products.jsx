import css from "./Products.module.css";
import Container from "../../components/Container/Container";
import { ProductsFilter } from "../../components/products/ProductsFilter/ProductsFilter";

import { ProductsList } from "../../components/products/ProductsList/ProductsList";
const Products = () => {
  return (
    <section className={css.products_section}>
      <Container>
        <>
          <h2 className={css.products_title}>Products</h2>
          <ProductsFilter />
          <ProductsList />
        </>
      </Container>
    </section>
  );
};

export default Products;
