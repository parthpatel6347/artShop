import styled from "styled-components";
import { Link } from "react-router-dom";
import { maxWidth } from "./size";

export const ProductsMain = styled.div`
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
    margin: 20px auto 0;
    width: 80%;
  }
  @media ${maxWidth.XXS} {
    width: 90%;
  }
`;

export const ProductsContainer = styled.div`
  margin-top: 50px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-items: center;
  @media ${maxWidth.XL} {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media ${maxWidth.M} {
    grid-template-columns: 1fr 1fr;
  }
  @media ${maxWidth.XS} {
    grid-template-columns: 1fr 1fr;
    margin-top: 20px;
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
  @media ${maxWidth.XS} {
    font-size: 28px;
    font-weight: 400;
    letter-spacing: 0.1px;
    font-weight: 400;
  }
`;

//Product Card styles

export const ProductCardMain = styled(Link)`
  width: 290px;
  height: 432px;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  text-decoration: none;
  padding: 10px;
  transition: all 0.3s ease-out;
  background-color: ${(props) => props.theme.colors.bgLight};
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
  &:hover {
    transform: translate(0, -4px);
    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
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
    width: 248px;
    height: 370px;
  }
  @media ${maxWidth.XS} {
    width: 176px;
    height: 264px;
    margin-bottom: 30px;
    padding: 7px;

  }
  @media ${maxWidth.XXS} {
    width: 160px;
    height: 240px;
  }
  @media ${maxWidth.iphone} {
    width: 160px;
    height: 240px;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  flex-grow: 1;
`;

export const ProductImage = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  /* right: 0;
  top: 0; */
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
`;

export const Frame = styled.div`
  position: absolute;
  height: calc(100% - 20px);
  width: calc(100% - 20px);
  left: 0;
  bottom: 0;
  /* background-color: ${(props) => props.theme.colors.accent}; */
  opacity:1;
  /* border: 4px solid ${(props) => props.theme.colors.accent}; */
  z-index: 1;
  @media ${maxWidth.XS} {
    border: 3px solid ${(props) => props.theme.colors.gold};
    height: calc(100% - 10px);
    width: calc(100% - 10px);
  }
`;

export const InfoContainer = styled.div`
  padding-top: 10px;
  /* height: 64px; */
  width: 100%;
  @media ${maxWidth.XS} {
    height: 28px;
  }
  @media ${maxWidth.XXS} {
    height: 25px;
  }
`;

export const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  /* margin-left: 30px; */
`;

export const TitleText = styled.span`
  font-size: 18px;
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.sansSerif};
  font-weight: 700;
  letter-spacing: 0.5px;
  margin-top: -2px;
  transition: all 0.3s ease-out;
  white-space:nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width:80%;
  ${ProductCardMain}:hover & {
    color: ${(props) => props.theme.colors.primary};
  }
  @media ${maxWidth.XS} {
    font-size: 15px;
    font-weight: 600;
    letter-spacing: 0.3px;
    margin-top: -5px;
  }
  @media ${maxWidth.XXS} {
    font-size: 13px;
  }
`;

export const SubTitleText = styled.span`
  font-size: 13px;
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.sans};
  font-weight: 600;
  letter-spacing: 0.5px;
  @media ${maxWidth.XS} {
    display: none;
  }
`;
