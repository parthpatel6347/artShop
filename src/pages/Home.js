import React from "react";
import HomeCategory from "../components/HomeCategory";
import HomeCategoryAlt from "../components/HomeCategoryAlt";
import HomeSeparatorText from "../components/HomeSeparatorText";
import Services from "../components/Services";
import { categoryData } from "../artShopStaticData";

import {
  ContainerRight,
  ContainerLeft,
  FrameBottom,
  FrameTop,
  HomeContainer,
  ImageContainer,
  ImageStyled,
  SubText,
  TextContainer,
  MainText,
  ContainerLeftInner,
  SplashButton,
  MainTextBG,
} from "../styles/HomeStyles";

const Home = () => {
  let { paintings, digital, sculptures, photos } = categoryData;
  return (
    <>
      <HomeContainer>
        <ContainerLeft>
          <ContainerLeftInner>
            <TextContainer>
              <MainText><MainTextBG>Extraordinary</MainTextBG> art,</MainText>
              <MainText>Curated by masters.</MainText>
            </TextContainer>
            <SubText>
              Discover and collect the best art from around the globe.
            </SubText>
            <SplashButton to="/explore">Explore</SplashButton>
          </ContainerLeftInner>
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
      <HomeCategory
        title={paintings.title}
        description={paintings.description}
        image={paintings.image}
        link={paintings.link}
      />
      <HomeCategoryAlt
        title={digital.title}
        description={digital.description}
        image={digital.image}
        link={digital.link}
      />
      <HomeCategory
        title={sculptures.title}
        description={sculptures.description}
        image={sculptures.image}
        link={sculptures.link}
      />
      <HomeCategoryAlt
        title={photos.title}
        description={photos.description}
        image={photos.image}
        link={photos.link}
      />
      <HomeSeparatorText text="We promise the best services" />
      <Services />
    </>
  );
};

export default Home;
