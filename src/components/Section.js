import React from "react";
import styled from "styled-components";
import Fade from 'react-reveal/Fade';

function Section(props) {
  console.log(props);
  return (
    <Container backgroundImg={props.backgroundImg}>
        <Fade bottom>
      <ItemText>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </ItemText>
      </Fade>
      <Buttons>
          <Fade bottom>
        <ButtonGroup>
          <ButtonLeft>{props.leftBtnTxt}</ButtonLeft>

          {props.rightBtnTxt && <ButtonRight>{props.rightBtnTxt}</ButtonRight>}
        </ButtonGroup>
        </Fade>
        <DownArrow src={"/images/down-arrow.svg"}></DownArrow>
      </Buttons>
    </Container>
  );
}

export default Section;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between; //vertical alignment
  align-items: center; //horizontal alignment
  background-image: ${(props) => `url("/images/${props.backgroundImg}")`};
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const Buttons = styled.div``;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ButtonLeft = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;

const ButtonRight = styled(ButtonLeft)`
  background-color: white;
  opacity: 0.65;
  color: black;
`;

const DownArrow = styled.img`
  margin-top: 20px;
  height: 40px;
  animation: animateDown infinite 1.5s;
`;
