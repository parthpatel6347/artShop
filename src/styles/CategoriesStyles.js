import styled from "styled-components";
import { Link } from "react-router-dom";
import { maxWidth } from "./size";

export const CategoryContainer = styled.div`
  height: calc(100vh - 100px);
  width: 100vw;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${maxWidth.M} {
    flex-direction: column;
    height: unset;
    margin-top: 35px;
    margin-bottom: 35px;
  }
  @media ${maxWidth.XS} {
    margin-top: 15px;
  }
`;

export const CategoryCardContainer = styled.div`
  box-sizing: border-box;
  margin: 30px;
  display: flex;
  flex-direction: column;
  height: 75%;
  border: 1px solid rgba(0, 0, 0, 0);
  @media ${maxWidth.XL} {
    height: 70%;
    margin: 20px;
  }
  @media ${maxWidth.M} {
    height: unset;
    width: 65%;
    flex-direction: column-reverse;
    margin: 15px 0;
  }
  @media ${maxWidth.XS} {
    width: 75%;
  }
  @media ${maxWidth.XXS} {
    width: 85%;
    margin: 10px;
  }
`;

export const CategoryImageContainer = styled.div`
  position: relative;
  height: 90%;
  width: 220px;
  &:hover {
    cursor: pointer;
  }
  @media ${maxWidth.XL} {
    width: 180px;
  }
  @media ${maxWidth.M} {
    height: 160px;
    width: unset;
  }
  @media ${maxWidth.XXS} {
    height: 130px;
  }
`;

export const Frame = styled.div`
  border: 4px solid ${(props) => props.theme.colors.accentDark};
  height: calc(100% - 20px);
  width: 200px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
  box-shadow: rgba(0, 0, 0, 0.1) 6px 6px 6px,
    rgba(0, 0, 0, 0.1) 6px 6px 6px inset;
  @media ${maxWidth.XL} {
    width: 165px;
    height: calc(100% - 15px);
  }
  @media ${maxWidth.M} {
    height: calc(100% - 15px);
    width: calc(100% - 15px);
  }
  @media ${maxWidth.XXS} {
    height: calc(100% - 12px);
    width: calc(100% - 12px);
  }
`;

export const CategoryImage = styled.div`
  height: calc(100% - 20px);
  width: 200px;
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 1;
  background-size: cover;
  background-position: center;
  filter: grayscale(1);
  transition: all 0.2s linear;
  ${CategoryCardContainer}:hover & {
    filter: grayscale(0);
  }
  @media ${maxWidth.XL} {
    width: 165px;
    height: calc(100% - 15px);
  }
  @media ${maxWidth.M} {
    height: calc(100% - 15px);
    width: calc(100% - 15px);
    filter: grayscale(0);
  }
  @media ${maxWidth.XXS} {
    height: calc(100% - 12px);
    width: calc(100% - 12px);
  }
`;

export const CategoryName = styled(Link)`
  margin-top: 12px;
  font-size: 23px;
  font-family: ${(props) => props.theme.fonts.sansSerif};
  color: ${(props) => props.theme.colors.primary};
  text-decoration: none;
  font-weight:600;
  @media ${maxWidth.M} {
    margin-top: unset;
    margin-bottom: 6px;
    font-size: 20px;
    font-weight: 600;
  }
  @media ${maxWidth.XXS} {
    font-size: 18px;
    margin-bottom: 4px;
  }
  ${CategoryCardContainer}:hover & {
    text-decoration: underline;
  }
`;
