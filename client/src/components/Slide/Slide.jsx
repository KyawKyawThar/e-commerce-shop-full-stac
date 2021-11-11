import styled from 'styled-components';
import { ArrowLeftTwoTone, ArrowRightTwoTone } from '@material-ui/icons';
import { sliderItems } from '../custom/data';
import { useState } from 'react';
import { mobile } from '../../Responsive';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: 'none' })}
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === 'left' && '10px'};
  right: ${(props) => props.direction === 'right' && '10px'};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slider = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
`;

const Image = styled.img`
  height: 80%;
  margin-left: 4.8rem;
`;
const InfoContainer = styled.div`
  flex: 1;
  text-transform: uppercase;
  padding: 4.8rem;
`;

const Title = styled.h1`
  font-size: 6.2rem; ;
`;
const Desc = styled.p`
  margin: 4.8rem 0;
  font-size: 2rem;
  font-weight: 500;
  /* letter-spacing: 3px; */
`;
const Bottom = styled.button`
  //padding: 8px 16px;
  padding: 0.25em 0.75em;
  min-width: 10ch;
  min-height: 44px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.8rem;
  background-color: transparent;
`;

const Slide = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow direction='left' onClick={() => handleClick('left')}>
        <ArrowLeftTwoTone />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slider bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Bottom>Show Now</Bottom>
            </InfoContainer>
          </Slider>
        ))}
      </Wrapper>
      <Arrow direction='right' onClick={() => handleClick('right')}>
        <ArrowRightTwoTone />
      </Arrow>
    </Container>
  );
};

export default Slide;
