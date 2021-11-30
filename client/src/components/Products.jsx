import styled from 'styled-components';

import Product from './Product';
import { useEffect, useState } from 'react';
import { publicRequest } from '../requestMethod';

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
    if (sorts === 'newest') {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sorts === 'asc') {
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
