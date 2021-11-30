import styled from 'styled-components';
<<<<<<< HEAD:client/src/components/Products.jsx

import Product from './Product';
import { useEffect, useState } from 'react';
import { publicRequest } from '../requestMethod';
=======
import ProductDetails from './ProductDetails';
import axios from 'axios';
import { useEffect, useState } from 'react';
>>>>>>> de56e82f2c1fddd794553deee64f2890804e6368:client/src/components/Products/Product.jsx

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ cats, filters, sorts }) => {
  //console.log(cats, filters, sorts);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await publicRequest.get(
          cats ? `/products/?category=${cats}` : '/products'
        );

        setProducts(res.data);
      } catch (e) {}
    };
    getProducts();
  }, [cats]);

  //console.log(products);
  useEffect(() => {
    cats &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cats, filters]);

  // console.log({ filteredProducts });
  // console.log({ products });

  useEffect(() => {
<<<<<<< HEAD:client/src/components/Products.jsx
    if (sorts === 'newest') {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sorts === 'asc') {
=======
    if (sort === 'newest') {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === 'asc') {
>>>>>>> de56e82f2c1fddd794553deee64f2890804e6368:client/src/components/Products/Product.jsx
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sorts]);

  //console.log({ sorts });

  return (
    <Container>
      {cats
        ? filteredProducts.map((item) => <Product item={item} key={item._id} />)
        : products
            .slice(0, 8)
            .map((item) => <Product item={item} key={item._id} />)}
    </Container>
  );
};

export default Products;
