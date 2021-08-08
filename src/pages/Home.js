import React from "react";

import {
  ButtonStyled,
  Container,
  ContainerLeft,
  HomeContainer,
  SubText,
  TextContainer,
} from "../styles/HomeStyles";

const Home = () => {
  return (
    <HomeContainer>
      <ContainerLeft>
        <TextContainer>Extraordinary art,</TextContainer>
        <TextContainer>Curated by experts.</TextContainer>
        <SubText>
          Discover and collect the best art from around the globe.
        </SubText>
        <ButtonStyled to="/explore">Explore</ButtonStyled>
      </ContainerLeft>
      <Container>
        <h2>Right</h2>
      </Container>
    </HomeContainer>
  );
};

export default Home;
