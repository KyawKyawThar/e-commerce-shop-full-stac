import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { mobile } from "../../Responsive";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Container = styled.div`
  margin: 0.8rem;
  height: 6rem;
  font-size: 1.4rem;
  ${mobile({ height: "4.8rem" })}
`;

const Wrapper = styled.div`
  padding: 1.2rem 1.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "1.2rem 0rem" })}
`;

const Language = styled.span`
  cursor: pointer;
  font-size: 1.4rem;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;

  align-items: center;
  padding: 0.8rem;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "7rem" })}
`;

const Logo = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: bold;
  ${mobile({ fontSize: "2.4rem" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 15px;
`;

const Center = styled.div`
  font-weight: bold;
  flex: 1;
  font-size: 2.4rem;
  text-align: center;
`;
const Right = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;

  ${mobile({ flex: 1.8, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  cursor: pointer;
  text-transform: uppercase;
  margin-left: 3.2rem;
  ${mobile({ fontSize: "1.2rem", marginLeft: "1rem" })}
`;

const NavBar = () => {
  const order = useSelector((state) => state.cart.order);
  // console.log(cart);
  // console.log({ order });
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "grey" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo to="/">HighestLeveL</Logo>
        </Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Sign In</MenuItem>

          <Link to="/cart">
            <MenuItem>
              <Badge color="primary" badgeContent={order}>
                <ShoppingCartOutlined style={{ fontSize: 30 }} />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};
export default NavBar;
