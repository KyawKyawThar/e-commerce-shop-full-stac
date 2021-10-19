import styled from "styled-components";
import { mobile } from "../../Responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  height: 70vh;
  margin: 0.8rem;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "25vh" })}
`;
const InfoContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  color: white;
  letter-spacing: 2px;
  font-weight: 800;
  font-size: 3rem;
  margin-bottom: 3.2rem;
`;
const Button = styled.button`
  background-color: white;
  color: #636060;
  border: none;
  font-weight: 600;
  padding: 8px 12px;
  border-radius: 0.8rem;
  cursor: pointer;
`;

const CategoriesItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
        <Image src={item.img} />
        <InfoContainer>
          <Title>{item.title}</Title>
          <Button>Show Now</Button>
        </InfoContainer>
      </Link>
    </Container>
  );
};

export default CategoriesItem;
