import styled from "styled-components";
import Announcement from "../../components/Advertisement/Advertisement";
import NavBar from "../../components/NavBar/NavBar";

import Product from "../../components/Products/Product";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import Footer from "../../components/Footer/Footer";
import { mobile } from "../../Responsive";

const Container = styled.div``;
const Title = styled.h1`
  margin: 2.4rem;
  font-size: 3.6rem;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2.4rem;
  font-size: 2rem;
  font-weight: 300;
`;
const Filter = styled.div`
  margin-top: 1.8rem;
`;

const FilterText = styled.span`
  font-size: 2rem;
  margin-right: 1.6rem;
`;
const Select = styled.select`
  padding: 1rem 0.8rem;
  margin-right: 1.6rem;
  border: 1px solid darkgray;

  ${mobile({ marginTop: "1.2rem " })}
`;
const Options = styled.option``;

const ProductLists = () => {
  return (
    <Container>
      <Announcement />
      <NavBar />

      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products: </FilterText>
          <Select>
            <Options disabled>Colors</Options>
            <Options>White</Options>
            <Options>Black</Options>
            <Options>Red</Options>
            <Options>Blue</Options>
            <Options>Yellow</Options>
            <Options>Green</Options>
          </Select>

          <Select>
            <Options disabled>Sizes</Options>
            <Options>Xs</Options>
            <Options>S</Options>
            <Options>M</Options>
            <Options>L</Options>
            <Options>XL</Options>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products: </FilterText>
          <Select>
            <Options>Newest</Options>
            <Options>Price(asc)</Options>
            <Options>Price(desc)</Options>
          </Select>
        </Filter>
      </FilterContainer>

      <Product />
      <NewsLetter />
      <Footer />
    </Container>
  );
};
export default ProductLists;
