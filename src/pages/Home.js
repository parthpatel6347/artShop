import React from "react";
import HomeCategory from "../components/HomeCategory";
import HomeCategoryAlt from "../components/HomeCategoryAlt";
import HomeSeparatorText from "../components/HomeSeparatorText";
import Services from "../components/Services";
import { categoryData } from "../artShopStaticData";

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
  MainText,
} from "../styles/HomeStyles";

const Home = () => {
  let { paintings, digital, sculptures, photos } = categoryData;
  return (
    <>
      <HomeContainer>
        <ContainerLeft>
          <TextContainer>
            <MainText>Extraordinary art,</MainText>
            <MainText>Curated by masters.</MainText>
          </TextContainer>
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
