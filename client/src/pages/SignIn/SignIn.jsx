import styled from 'styled-components';
import { mobile } from '../../Responsive';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url('https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
      center;
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 40%;
  background-color: white;
  padding: 2.4rem;
  ${mobile({ width: '75%' })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  min-width: 40%;
  margin: 1.2rem 0;
  padding: 1.2rem;
`;

const Button = styled.button`
  width: 40%;
  padding: 1.5rem 2rem;
  background-color: teal;
  color: white;
  cursor: pointer;
  border: none;
  margin-bottom: 1.6rem;
  ${mobile({ padding: '0.7rem 1.7rem' })}

  &:hover {
    background-color: darkgrey;
  }
`;

const Link = styled.a`
  text-decoration: underline;
  font-size: 1.4rem;
  margin-bottom: 1.6rem;
  cursor: pointer;
  ${mobile({ fontSize: '1.2rem' })}
`;

const SignIn = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <Form>
          <Input placeholder='username' />
          <Input placeholder='password' />
          <Button>LOGIN</Button>
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default SignIn;
