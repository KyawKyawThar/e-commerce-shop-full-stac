import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mobile } from '../responsive';
import Redirect from "react-router-dom/es/Redirect";
import {logout} from "../redux/userReducer";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: '50px' })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: '10px 0px' })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: 'none' })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: '50px' })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  color: blue;
  font-weight: bold;
  ${mobile({ fontSize: '24px' })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: 'center' })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 45px;
  ${mobile({ fontSize: '12px', marginLeft: '10px' })}
`;

const Navbar = () => {

  const order = useSelector((state) => state.cart.order);
  //console.log(order);
  const user = useSelector(state => state.user.currentUser)
 // console.log({user})
 const dispatch = useDispatch()
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder='Search' />
            <Search style={{ color: 'gray', fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Link to='/'>
            <Logo>HighestLeveL</Logo>
          </Link>
        </Center>
        <Right>

          {
            user? <MenuItem onClick={() => dispatch(logout())}>SIGN OUT</MenuItem> : <Redirect to='/login'/>
          }


          <Link to='/cart'>
            <MenuItem>
              <Badge badgeContent={order} color='primary'>
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
