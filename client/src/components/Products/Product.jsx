import styled from "styled-components";
import ProductDetails from "./ProductDetails";
import { popularProducts } from "../custom/data";

const Container = styled.div`
  flex: 1;
  padding: 2.4rem;
  display: flex;
  flex-wrap: wrap;
`;

const Product = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <ProductDetails item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Product;
