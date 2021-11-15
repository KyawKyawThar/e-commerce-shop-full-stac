import { Add, Remove } from "@material-ui/icons";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Announcement from "../../components/Advertisement/Advertisement";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import { mobile } from "../../Responsive";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartRedux";

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  padding: 4.8rem;
  ${mobile({ padding: "1rem", flexDirection: "column" })}
`;

const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 78%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0 4.8rem;
  ${mobile({ padding: "1.2rem" })}
`;

const Title = styled.h1`
  font-size: 4.4rem;
  font-weight: 200;
`;
const Desc = styled.p`
  margin-top: 2.4rem;
  font-size: 1.8rem;
  font-weight: 300;
  line-height: 2.4rem;
`;
const Price = styled.span`
  display: inline-block;
  margin-top: 2.4rem;

  font-weight: 100;
  font-size: 3rem;
`;

const FilterContainer = styled.div`
  margin-top: 2.4rem;
  width: 50%;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 2.4rem;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0 0.8rem;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 0.4rem;
  padding: 1.2rem;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  margin-top: 6.4rem;
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  gap: 1.6rem;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  border-radius: 5px;
  border: 1px solid teal;
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  background-color: white;
  cursor: pointer;
  font-weight: 200;
  padding: 1.5rem;
  border: 2px solid teal;
  font-size: 2rem;

  ${mobile({ fontSize: "1.6rem", padding: "0.8rem 1.6rem" })}

  &:hover {
    background-color: #f8f4f4;
  }
`;

const ProductDesc = () => {
  const location = useLocation();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, serColor] = useState("");
  const [size, setSize] = useState("");
  const id = location.pathname.split("/")[2];
  const dispatch = useDispatch();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8080/api/products/find/${id}`
        );

        setProduct(res.data);
      } catch (e) {}
    };
    getProducts();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec" && quantity > 0) {
      setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    dispatch(addProduct({ ...product, color, size, quantity }));
  };
  return (
    <Container>
      <NavBar />
      <Announcement />
      <Wrapper>
        <ImageContainer>
          <Image src={product.img} />
        </ImageContainer>

        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price>$ {product.price}</Price>

          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>

              {/* ? is important */}
              {product.color?.map((c) => (
                <FilterColor color={c} key={c} onClick={() => serColor(c)} />
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(e) => setSize(e.target.value)}>
                {product.size?.map((s) => (
                  <FilterSizeOption key={s}>{s.toUpperCase()}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>

          <AddContainer>
            <AmountContainer>
              <Remove
                onClick={() => handleQuantity("dec")}
                style={{ fontSize: 25, cursor: "pointer" }}
              />
              <Amount>{quantity}</Amount>
              <Add
                onClick={() => handleQuantity("inc")}
                style={{ fontSize: 25, cursor: "pointer" }}
              />
            </AmountContainer>
            <Button onClick={() => handleClick()}>Add to Cart </Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default ProductDesc;
