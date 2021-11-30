import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { mobile } from '../responsive';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: '0px 20px', display: 'flex', flexDirection: 'column' })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: '0px' })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: '10px 0px' })}
`;
const Option = styled.option``;

const ProductList = () => {
  const location = useLocation();
  const [filters, setFilters] = useState({});
  const [sorts, setSorts] = useState('newest');
  //console.log(location);
  const cats = location.pathname.split('/')[2];
  // console.log(cats)

  const handleClick = (e) => {
    const value = e.target.value.toLowerCase();
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };
  // console.log(filters)
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>{cats.toUpperCase()}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name='color' onChange={handleClick}>
            <Option>Color</Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select name='size' onChange={handleClick}>
            <Option>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => setSorts(e.target.value)}>
            <Option selected>Newest</Option>
            <Option value='asc'>Price (asc)</Option>
            <Option value='desc'>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cats={cats} filters={filters} sorts={sorts} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
