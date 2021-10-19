import styled from 'styled-components';
import { mobile } from '../../Responsive';
import { categories } from '../custom/data';
import CategoriesItem from './CategoriesItem';

const Container = styled.div`
  display: flex;
  padding: 2.4rem;

  ${mobile({ padding: '0px', flexDirection: 'column' })}
`;
const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoriesItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
