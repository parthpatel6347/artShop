import React from "react";
import { withRouter } from "react-router";

// import styled components
import {
  Frame,
  ImageContainer,
  InfoContainer,
  InfoRow,
  ProductCardMain,
  ProductImage,
  SubTitleText,
  TitleText,
} from "../styles/ProductListStyles";

const ProductCard = ({ title, artist, image, id, location, price }) => {
  return (
    <ProductCardMain to={`${location.pathname}/${id}`}>
      <ImageContainer>
        <ProductImage
          style={{
            backgroundImage: `url(${image})`,
          }}
        ></ProductImage>
        <Frame></Frame>
      </ImageContainer>
      <InfoContainer>
        <InfoRow>
          <SubTitleText>{artist}</SubTitleText>
          <SubTitleText>Price</SubTitleText>
        </InfoRow>
        <InfoRow>
          <TitleText>{title}</TitleText>
          <TitleText>${price}</TitleText>
        </InfoRow>
      </InfoContainer>
    </ProductCardMain>
  );
};

export default withRouter(ProductCard);
