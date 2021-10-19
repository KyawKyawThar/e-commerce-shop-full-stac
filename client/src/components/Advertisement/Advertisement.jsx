import styled from 'styled-components';

const Container = styled.div`
  height: 3rem;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0 0.8rem;
  padding: 2rem;
`;

const Announcement = () => {
  return <Container>Super Deal!Free Shopping on Order over $50</Container>;
};

export default Announcement;
