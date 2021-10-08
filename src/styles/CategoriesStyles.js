import styled from "styled-components";
import { Link } from "react-router-dom";

export const CategoryContainer = styled.div`
  /* border: 1px dotted red; ///////// */
  height: calc(100vh - 100px);
  width: 100vw;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CategoryCardContainer = styled.div`
  box-sizing: border-box;
  /* padding: 10px; */
  margin: 30px;
  display: flex;
  flex-direction: column;
  height: 75%;
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 5px;
  &:hover {
  }
`;

export const CategoryImageContainer = styled.div`
  position: relative;
  /* border: 1px dotted orange; */
  height: 90%;
  width: 220px;
  &:hover {
    cursor: pointer;
  }
`;

export const Frame = styled.div`
  border: 4px solid ${(props) => props.theme.colors.gold};
  height: calc(100% - 20px);
  width: 200px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.1) 6px 6px 6px,
    rgba(0, 0, 0, 0.1) 6px 6px 6px inset;
`;

export const CategoryImage = styled.div`
  background-color: cyan;
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
`;

export const CategoryName = styled(Link)`
  margin-top: 12px;
  font-size: 25px;
  font-family: ${(props) => props.theme.fonts.sansSerif};
  color: ${(props) => props.theme.colors.primary};
  text-decoration: none;
`;
