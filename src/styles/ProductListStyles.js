import styled from "styled-components";
import { Link } from "react-router-dom";
import { maxWidth } from "./size";

export const ProductsMain = styled.div`
  /* border: 1px dotted purple; ///////// */
  width: 1300px;
  display: flex;
  flex-direction: column;
  margin: 40px auto 0;
  @media ${maxWidth.XXL} {
    width: 1170px;
  }
  @media ${maxWidth.XL} {
    width: 870px;
  }
  @media ${maxWidth.M} {
    width: 640px;
  }
  @media ${maxWidth.S} {
    width: 560px;
  }
  @media ${maxWidth.XS} {
    width: 290px;
  }
`;

export const ProductsContainer = styled.div`
  margin-top: 50px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  /* border: 1px dotted red; */
  justify-items: center;
  @media ${maxWidth.XL} {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media ${maxWidth.M} {
    grid-template-columns: 1fr 1fr;
  }
  @media ${maxWidth.XS} {
    grid-template-columns: 1fr;
  }
`;

export const ProductsTitle = styled.span`
  font-size: 32px;
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.sansSerif};
  font-weight: 400;
  letter-spacing: 0.2px;
  padding-left: 14px;
  @media ${maxWidth.XS} {
    padding-left: unset;
    text-align: center;
  }
`;

//Product Card styles

export const ProductCardMain = styled(Link)`
  /* border: 1px dotted red; */
  width: 290px;
  height: 432px;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  text-decoration: none;
  padding: 10px;
  transition: all 0.3s ease-out;
  &:hover {
    /* background-color: ${(props) => props.theme.colors.bgDarker}; */
  }
  @media ${maxWidth.XXL} {
    width: 261px;
    height: 389px;
  }
  @media ${maxWidth.M} {
    width: 290px;
    height: 432px;
  }
  @media ${maxWidth.S} {
    width: 261px;
    height: 389px;
  }
  @media ${maxWidth.XS} {
    width: 290px;
    height: 432px;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  flex-grow: 1;
`;

export const ProductImage = styled.div`
  position: absolute;
  height: calc(100% - 20px);
  width: calc(100% - 20px);
  right: 0;
  bottom: 0;
  box-sizing: border-box;
  z-index: 2;
  background-size: cover;
  background-position: center;
  /* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */
  box-shadow: 0 2px 20px 0 rgb(0 0 0 / 15%);
  /* transition: all 0.2s; */
  transition: box-shadow 0.3s ease-out, transform 0.3s ease-out,
    opacity 0.2s ease-out;
  transition-delay: 0.1s;
  ${ProductCardMain}:hover & {
    transform: translate(0, -4px);
    /* box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; */
    box-shadow: rgb(45 45 45 / 10%) 0 2px 2px, rgb(49 49 49 / 10%) 0 4px 4px,
      rgb(42 42 42 / 10%) 0 8px 8px, rgb(32 32 32 / 10%) 0 16px 16px,
      rgb(49 49 49 / 10%) 0 32px 32px, rgb(35 35 35 / 10%) 0 64px 64px;
  }
`;

export const Frame = styled.div`
  position: absolute;
  height: calc(100% - 20px);
  width: calc(100% - 20px);
  left: 0;
  top: 0;
  border: 5px solid ${(props) => props.theme.colors.gold};
  z-index: 1;
`;

export const InfoContainer = styled.div`
  padding-top: 10px;
  height: 64px;
  width: 100%;
`;

export const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TitleText = styled.span`
  font-size: 18px;
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.sansSerif};
  font-weight: 700;
  letter-spacing: 0.5px;
  margin-top: -2px;
  transition: all 0.3s ease-out;
  ${ProductCardMain}:hover & {
    color: ${(props) => props.theme.colors.gold};
  }
`;

export const SubTitleText = styled.span`
  font-size: 13px;
  color: ${(props) => props.theme.colors.gold};
  font-family: ${(props) => props.theme.fonts.sans};
  font-weight: 600;
  letter-spacing: 0.5px;
`;
