import React from "react";
import HomeCategory from "../components/HomeCategory";
import HomeCategoryAlt from "../components/HomeCategoryAlt";
import HomeSeparatorText from "../components/HomeSeparatorText";
import Services from "../components/Services";

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
  let { paintings, digital, sculptures, photos } = homeCategoryData;
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
      <HomeCategory
        title={paintings.title}
        description={paintings.description}
        image={paintings.image}
      />
      <HomeCategoryAlt
        title={digital.title}
        description={digital.description}
        image={digital.image}
      />
      <HomeCategory
        title={sculptures.title}
        description={sculptures.description}
        image={sculptures.image}
      />
      <HomeCategoryAlt
        title={photos.title}
        description={photos.description}
        image={photos.image}
      />
      <HomeSeparatorText text="We promise the best services" />
      <Services />
    </>
  );
};

export default Home;

const homeCategoryData = {
  paintings: {
    title: "Paintings",
    description:
      "The most exquisite collection paintings from top artists around the world",
    image:
      "https://images.unsplash.com/photo-1615615307921-1f456bc82a08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
  },
  digital: {
    title: "Digital Art",
    description:
      "An amazing collection of 2D and 3D digital art from the worlds most established artists.",
    image:
      "https://cdna.artstation.com/p/assets/images/images/040/313/496/medium/quentin-marsollier-whale-illu.jpg?1628504617",
  },
  sculptures: {
    title: "Sculptures",
    description:
      "The most unique pieces from leading artists around the world.",
    image:
      "https://images.unsplash.com/photo-1597890741302-14d7853b0d82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
  },
  photos: {
    title: "Photos",
    description:
      "A collection of extradordinary photos delivered to you in high quality print.",
    image:
      "https://images.unsplash.com/photo-1625292808454-2eee501c3e71?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfHhIeFlUTUhMZ09jfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
  },
};
