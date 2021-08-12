import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
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
    <ProductCardMain>
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
          <SubTitleText style={{ marginLeft: "30px" }}>{artist}</SubTitleText>
          <SubTitleText>Price</SubTitleText>
        </InfoRow>
        <InfoRow>
          <TitleText style={{ marginLeft: "30px" }}>{title}</TitleText>
          <TitleText>${price}</TitleText>
        </InfoRow>
      </InfoContainer>
    </ProductCardMain>
  );
};

export default withRouter(ProductCard);

{
  /* <Link to={`${location.pathname}/${id}`}>
<img src={image} alt={title} />
<p>{title}</p>
</Link> */
}
