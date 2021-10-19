import styled from 'styled-components';
import Announcement from '../../components/Advertisement/Advertisement';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import { Add, Remove } from '@material-ui/icons';

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 2.4rem;
  /* background-color: lightblue; */
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 300;
  text-align: center;
  text-transform: uppercase;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;

  align-items: center;
  padding: 2.4rem;
`;

const TopTexts = styled.div``;

const TopText = styled.span`
  text-decoration: underline;
  margin-left: 1.6rem;
  font-size: 2rem;
  font-weight: 300;
  cursor: pointer;
`;

const TopButton = styled.button`
  text-transform: uppercase;
  padding: 1.5rem 2rem;
  cursor: pointer;
  font-weight: 400;
`;

const Buttom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  font-size: 2.4rem;

  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDetail = styled.div`
  display: flex;

  flex: 2;
`;

const Image = styled.img`
  width: 200px;
`;

const Detail = styled.div`
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProductName = styled.span`
  font-size: 2rem;
  font-weight: 300;
`;

const ProductId = styled.span`
  font-size: 2rem;
`;

const ProductColor = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span`
  font-size: 2rem;
`;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ProductAmoutContainer = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
`;

const ProductAmount = styled.div``;

const ProductPrice = styled.div`
  margin-top: 2.4rem;
  font-weight: 200;
  font-size: 3rem;
`;
const Hr = styled.hr`
  background-color: #eeee;
  border: none;
  height: 2px;
`;

const Summary = styled.div`
  font-size: 2.4rem;
  flex: 1;

  border: 0.5px solid lightgrey;
  border-radius: 10px;
  padding: 1.6rem;
`;

const SummaryTitle = styled.div`
  font-size: 200;
`;
const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 3.2rem 0;
  font-weight: ${(props) => props.type === 'total' && '600'};
  font-size: ${(props) => props.type === 'toal' && '30px'};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 1.2rem;
  background-color: black;
  color: white;
  margin-top: 0.8rem;
  border: none;
  font-weight: 600;
`;
const Cart = () => {
  return (
    <Container>
      <NavBar />
      <Announcement />
      <Wrapper>
        <Title>Your Bag</Title>

        <Top>
          <TopButton>Continue Shopping</TopButton>

          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Whitelist(0)</TopText>
          </TopTexts>

          <TopButton type='filled'>Checkout Now</TopButton>
        </Top>

        <Buttom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src='https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A' />

                <Detail>
                  <ProductName>
                    <b>Product:</b> JESSIE THUNDER SHOES
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 93813718293
                  </ProductId>

                  <ProductColor color='black' />
                  <ProductSize>
                    <b>Size:</b> 37.5
                  </ProductSize>
                </Detail>
              </ProductDetail>
              <PriceDetail>
                <ProductAmoutContainer>
                  <Add style={{ fontSize: 25 }} />
                  <ProductAmount>2</ProductAmount>
                  <Remove style={{ fontSize: 25 }} />
                </ProductAmoutContainer>
                <ProductPrice>$30</ProductPrice>
              </PriceDetail>
            </Product>

            <Hr />

            <Product>
              <ProductDetail>
                <Image src='https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png' />

                <Detail>
                  <ProductName>
                    <b>Product:</b> HAKURA T-SHIRT
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 93813718293
                  </ProductId>

                  <ProductColor color='gray' />
                  <ProductSize>
                    <b>Size:</b> M
                  </ProductSize>
                </Detail>
              </ProductDetail>
              <PriceDetail>
                <ProductAmoutContainer>
                  <Add style={{ fontSize: 25 }} />
                  <ProductAmount>2</ProductAmount>
                  <Remove style={{ fontSize: 25 }} />
                </ProductAmoutContainer>
                <ProductPrice>$20</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>Order Summary</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>

            <SummaryItem>
              <SummaryItemText>Estimate shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>

            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>

            <SummaryItem type='total'>
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>

            <Button>Checkout Now</Button>
          </Summary>
        </Buttom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
//
//
