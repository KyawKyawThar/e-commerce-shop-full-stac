import styled from 'styled-components';
import Announcement from '../../components/Advertisement/Advertisement';

import Product from '../../components/Products/Product';
import NewsLetter from '../../components/NewsLetter/NewsLetter';
import Footer from '../../components/Footer/Footer';
import { mobile } from '../../Responsive';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

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

  ${mobile({ marginTop: '1.2rem ' })}
`;
const Options = styled.option``;

const ProductLists = () => {
  const location = useLocation();
  const cat = location.pathname.split('/')[2];
  // console.log(cat);
  const [filters, setFilters] = useState([]);
  const [sort, setSort] = useState('newest');

  const handleFilters = (e) => {
    const value = e.target.value;
    //console.log({ value }, e.target.name); // value = "x,l,m,xl,black,white" , name="colors,sizes"
    setFilters({
      ...filters,
      [e.target.name]: value.toUpperCase(),
    });
  };
  // console.log(filters);

  return (
    <Container>
      <Announcement />

      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products: </FilterText>
          <Select name='color' onChange={handleFilters}>
            <Options disabled>Colors</Options>
            <Options>WHITE</Options>
            <Options>BLACK</Options>
            <Options>RED</Options>
            <Options>BLUE</Options>
            <Options>YELLOW</Options>
            <Options>GREEN</Options>
          </Select>

          <Select name='size' onChange={handleFilters}>
            <Options disabled>Sizes</Options>
            <Options>XS</Options>
            <Options>S</Options>
            <Options>M</Options>
            <Options>L</Options>
            <Options>XL</Options>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products: </FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Options value='newest'>Newest</Options>
            <Options value='asc'>Price(asc)</Options>
            <Options value='desc'>Price(desc)</Options>
          </Select>
        </Filter>
      </FilterContainer>

      <Product cat={cat} filters={filters} sort={sort} />

      <NewsLetter />
      <Footer />
    </Container>
  );
};
export default ProductLists;
