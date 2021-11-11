import styled from 'styled-components';
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from '@material-ui/icons';
import { Link } from 'react-router-dom';

const Info = styled.div`
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
  z-index: 3;
  cursor: pointer;
  transition: all 0.5s ease;
`;

const Container = styled.div`
  flex: 1;
  min-width: 28rem;
  height: 35rem;
  margin: 0.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5fbf7;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;

const Circle = styled.div`
  background: white;
  border-radius: 50%;
  width: 170px;
  height: 170px;
  position: absolute;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div`
  border-radius: 50%;
  width: 3.6rem;
  height: 3.6rem;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const ProductDetails = ({ item }) => {
  return (
    <Container>
      <Circle />

      <Image src={item.img} alt='image' />
      <Info>
        <Icon>
          <ShoppingCartOutlined style={{ fontSize: 27 }} />
        </Icon>

        <Icon>
          <Link to={`/product/${item._id}`}>
            <SearchOutlined style={{ fontSize: 27 }} />
          </Link>
        </Icon>

        <Icon>
          <FavoriteBorderOutlined style={{ fontSize: 27 }} />
        </Icon>
      </Info>
    </Container>
  );
};

export default ProductDetails;
