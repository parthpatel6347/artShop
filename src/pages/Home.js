import React from "react";

import {
  ButtonStyled,
  ContainerRight,
  ContainerLeft,
  FrameBottom,
  FrameTop,
  HomeContainer,
  ImageContainer,
  ImageStyled,
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
      <ContainerRight>
        <ImageContainer>
          <FrameTop />
          <ImageStyled />
          <FrameBottom />
        </ImageContainer>
      </ContainerRight>
    </HomeContainer>
  );
};

export default Home;

// https://images.unsplash.com/photo-1617503752587-97d2103a96ea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1919&q=80
