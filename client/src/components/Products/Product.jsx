import styled from "styled-components";
import ProductDetails from "./ProductDetails";
import axios from "axios";
import { useEffect, useState } from "react";

const Container = styled.div`
  flex: 1;
  padding: 2.4rem;
  display: flex;
  flex-wrap: wrap;
`;

const Product = ({ cat, filters, sort }) => {
  //console.log(cat, filters, sort);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:8080/api/products?category=${cat}`
            : `http://localhost:8080/api/products`
        );
        setProducts(res.data);
      } catch {}
    };
    getProducts();
  }, [cat]); //when cat changes run this function
  // console.log({ products });

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]); //when products,cat,filters chages run this func

  // console.log({ filteredProducts });

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <Container>
      {/* *** Important**** */}
      {cat
        ? filteredProducts.map((item) => (
            <ProductDetails item={item} key={item._id} />
          ))
        : products
            .slice(0, 8)
            .map((item) => <ProductDetails item={item} key={item._id} />)}
    </Container>
  );
};

export default Product;
