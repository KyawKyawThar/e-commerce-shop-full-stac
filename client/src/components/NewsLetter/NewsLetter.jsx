import { Send } from '@material-ui/icons';
import styled from 'styled-components';
import { mobile } from '../../Responsive';

const Container = styled.div`
  background-color: #fcf5f7;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 5.2rem;
  margin-bottom: 4.8rem;

  font-weight: 600;
`;
const Desc = styled.div`
  font-size: 2.4rem;
  margin-bottom: 2.4rem;
  font-weight: 300;

  ${mobile({ textAlign: 'center' })}
`;
const InputContainer = styled.div`
  width: 50%;
  height: 4.8rem;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid #d3d3d3;

  ${mobile({ width: '80%' })}
`;
const Input = styled.input`
  border: none;
  padding-left: 1.6rem;
  flex: 8;
`;
const Button = styled.button`
  flex: 1.5;
  border: none;
  background-color: teal;
  color: white;
`;

const NewsLetter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products</Desc>
      <InputContainer>
        <Input placeholder='Your email' />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};
export default NewsLetter;
