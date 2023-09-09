import React from "react";
import { connect } from "react-redux";
import { addItem } from "../redux/cart/cartActions";
import { selectCartItems } from "../redux/cart/cartSelectors";
import { selectProduct } from "../redux/products/productsSelectors";

import { selectCurrentUser } from "../redux/user/userSelectors";
import { addItemToUserCart } from "../firebase/utils";
import {
  AddtoCartButton,
  ArtistNameContainer,
  BackButton,
  BackButtonContainer,
  Description,
  InfoContainer,
  ProductImage,
  ProductImageContainer,
  ProductPrice,
  ProductTitle,
  ProductViewContainer,
  ProductViewMain,
  SubTextGold,
  SubTextPrimary,
} from "../styles/ProductViewStyles";
import backArrow from "../svg/backArrow.svg";
import { useEffect } from "react";
import { useState } from "react";
import NotFound from "./NotFound";

const ProductView = ({
  addItemToCart,
  cartItems,
  foundProduct,
  currentUser,
}) => {

  const [productData, setProductData] = useState({})
  const [isInCart, setIsInCart] = useState(false)

  useEffect(() => {
    if (foundProduct) {
      setProductData(foundProduct)
      setIsInCart(cartItems.find((product) => product.id === foundProduct.id))
    }
  }, [cartItems, foundProduct])

  const { image, title, artist, description, price, category } = productData;

  const handleAdd = () => {
    if (!isInCart) {
      addItemToCart(foundProduct);
      if (currentUser)
        addItemToUserCart(currentUser, [...cartItems, foundProduct]);
    }
  };


  return (<>
    {foundProduct ? (
      <ProductViewMain>
        <BackButtonContainer>
          <BackButton to={`/explore/${category}`}>
            <img src={backArrow} alt="back" style={{ width: "24px", opacity: 0.7, marginTop: "3px" }} />
            All{" "}
            {category === "paintings"
              ? "paintings"
              : category === "digital"
                ? "digital art"
                : category === "photos"
                  ? "photos"
                  : "sculptures"}
          </BackButton>
        </BackButtonContainer>

        <ProductViewContainer>
          <ProductImageContainer>
            <ProductImage
              style={{
                backgroundImage: `url(${image})`,
              }}
            />
          </ProductImageContainer>
          <InfoContainer>
            <ProductTitle>{title}</ProductTitle>
            <ArtistNameContainer>
              <SubTextPrimary>By</SubTextPrimary>
              <SubTextGold style={{ marginLeft: "5px" }}>{artist}</SubTextGold>
            </ArtistNameContainer>
            <ProductPrice>${price}</ProductPrice>
            <Description>{description}</Description>
            <AddtoCartButton onClick={handleAdd} disabled={isInCart} to="">
              {isInCart ? "Item in cart" : "Add to cart"}
            </AddtoCartButton>
          </InfoContainer>
        </ProductViewContainer>
      </ProductViewMain>
    ) : (
      <NotFound />
    )}
  </>

  );
};

const mapDispatchtoProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItem(item)),
});

const mapStateToProps = (state, ownProps) => ({
  cartItems: selectCartItems(state),
  foundProduct: selectProduct(
    ownProps.match.params.id,
    ownProps.match.params.page
  )(state),
  currentUser: selectCurrentUser(state),
});

export default connect(mapStateToProps, mapDispatchtoProps)(ProductView);
