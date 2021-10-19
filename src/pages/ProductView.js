import React from "react";
import { connect } from "react-redux";
import { addItem } from "../redux/cart/cartActions";
import { selectCartItems } from "../redux/cart/cartSelectors";
import { selectProduct } from "../redux/products/productsSelectors";

import { selectCurrentUser } from "../redux/user/userSelectors";
import { addItemToUserCart } from "../firebase/utils";
import {
  AddtoCartButton,
  BackButton,
  BackButtonContainer,
  ButtonStyled,
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
import { ReactComponent as BackIcon } from "../svg/backArrow.svg";

const ProductView = ({
  addItemToCart,
  cartItems,
  foundProduct,
  currentUser,
}) => {
  const { image, title, artist, description, price, category } = foundProduct;

  let isInCart = cartItems.find((product) => product.id === foundProduct.id);

  const handleAdd = () => {
    if (isInCart) {
      alert("Item already added");
      return;
    }
    addItemToCart(foundProduct);
    if (currentUser)
      addItemToUserCart(currentUser, [...cartItems, foundProduct]);
  };

  return (
    <ProductViewMain>
      <BackButtonContainer>
        <BackButton to={`/explore/${category}`}>
          <BackIcon style={{ width: "24px" }} />
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
          <span style={{ marginBottom: "40px" }}>
            <SubTextPrimary>By</SubTextPrimary>
            <SubTextGold style={{ marginLeft: "5px" }}>{artist}</SubTextGold>
          </span>
          <ProductPrice>${price}</ProductPrice>
          <Description>{description}</Description>
          <AddtoCartButton onClick={handleAdd} disabled={isInCart}>
            {isInCart ? "Added to cart" : "Add to cart"}
          </AddtoCartButton>
        </InfoContainer>
      </ProductViewContainer>
    </ProductViewMain>
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
