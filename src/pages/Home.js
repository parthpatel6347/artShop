import React from "react";
import HomeCategory from "../components/HomeCategory";
import HomeSeparatorText from "../components/HomeSeparatorText";

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
    <>
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
      <HomeSeparatorText text="Exclusive artShop collections" />
      <HomeCategory />
    </>
  );
};

export default Home;
