import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from '@material-ui/icons';
import styled from 'styled-components';
import { mobile } from '../../Responsive';

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: 'column' })}
`;

const Left = styled.div`
  flex: 1;
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
`;

const Logo = styled.h1`
  font-size: 3.6rem;
`;

const Desc = styled.p`
  font-size: 1.6rem;
  margin: 2.4rem 0;
  line-height: 3.2rem;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 4.8rem;
  height: 4.8rem;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 2.4rem;
`;

const Center = styled.div`
  flex: 1;
  padding: 2.4rem;

  ${mobile({ display: 'none' })}
`;

const Title = styled.h3`
  margin-bottom: 3.2rem;
  font-size: 2.4rem;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  font-size: 1.6rem;
  width: 50%;
  margin-bottom: 1.2rem;
`;

const Right = styled.div`
  flex: 1;
  padding: 2.5rem;
  ${mobile({ backgroundColor: '#fcf5f7', marginRight: '-1rem' })}
`;

const ContentItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2.4rem;
  gap: 1.6rem;
  font-size: 1.6rem;
`;

const Payment = styled.img``;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>HighestLeveL</Logo>

        <Desc>
          There are many variations of passages of Items available, but the
          majority have suffered alteration in some form, by injected humour, or
          randomised words which don’t look even slightly believable.
        </Desc>

        <SocialContainer>
          <SocialIcon color='3B5999'>
            <Facebook style={{ fontSize: 27 }} />
          </SocialIcon>

          <SocialIcon color='E4405F'>
            <Instagram style={{ fontSize: 27 }} />
          </SocialIcon>

          <SocialIcon color='55ACEE'>
            <Twitter style={{ fontSize: 27 }} />
          </SocialIcon>

          <SocialIcon color='E60023'>
            <Pinterest style={{ fontSize: 27 }} />
          </SocialIcon>
        </SocialContainer>
      </Left>

      <Center>
        <Title>Useful Link</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Content</Title>
        <ContentItem>
          <Room style={{ fontSize: 24 }} /> 90 Street Chan Aye TharSan,Mandalay
        </ContentItem>
        <ContentItem>
          <Phone style={{ fontSize: 24 }} /> +95 9 123 45 67
        </ContentItem>

        <ContentItem>
          <MailOutline style={{ fontSize: 24 }} /> content@hl.com
        </ContentItem>

        <Payment src='https://i.ibb.co/Qfvn4z6/payment.png' />
      </Right>
    </Container>
  );
};
export default Footer;
