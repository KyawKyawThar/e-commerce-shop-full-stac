import styled from 'styled-components';
import { mobile } from '../../Responsive';

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  background-color: white;
  padding: 2.4rem;
  ${mobile({ width: '75%' })}
`;

const Title = styled.h1`
  font-weight: 300;
  font-size: 2.4rem;
`;

const Form = styled.div``;

const Input = styled.input`
  min-width: 40%;

  padding: 1.2rem;
  margin: 2.4rem 1.2rem 0 0;
`;

const Agreement = styled.div`
  font-size: 1.2rem;
  margin: 2.4rem 0;
  line-height: 1.6rem;
  ${mobile({ fontSize: '1.2rem' })}
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  border: none;
  ${mobile({ padding: '0.7rem 1.7rem' })}

  &:hover {
    background-color: darkgrey;
  }
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>

        <Form>
          <Input placeholder='name' />
          <Input placeholder='last name' />
          <Input placeholder='username' />
          <Input placeholder='email' />
          <Input placeholder='password' />
          <Input placeholder='confirm password' />
        </Form>

        <Agreement>
          By creating an account, I consent to the processing of my personal
          data in accordance with the <strong>PRIVACY POLICY</strong>
        </Agreement>
        <Button>CREATE</Button>
      </Wrapper>
    </Container>
  );
};

export default Register;
