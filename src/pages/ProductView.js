import React from "react";
import { connect } from "react-redux";
import { addItem } from "../redux/cart/cartActions";
import { selectCartItems } from "../redux/cart/cartSelectors";
import { selectProduct } from "../redux/products/productsSelectors";

import { selectCurrentUser } from "../redux/user/userSelectors";
import { addItemToUserCart } from "../firebase/utils";
import {
  ButtonStyled,
  Description,
  InfoContainer,
  ProductImage,
  ProductImageContainer,
  ProductPrice,
  ProductTitle,
  ProductViewMain,
  SubTextGold,
  SubTextPrimary,
} from "../styles/ProductViewStyles";

const ProductView = ({
  addItemToCart,
  cartItems,
  foundProduct,
  currentUser,
}) => {
  const { image, title, artist, description, price } = foundProduct;

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
        <ButtonStyled onClick={handleAdd} disabled={isInCart}>
          {isInCart ? "Added to cart" : "Add to cart"}
        </ButtonStyled>
      </InfoContainer>
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
