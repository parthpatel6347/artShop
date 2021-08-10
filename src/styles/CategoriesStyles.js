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
  margin: 18px;
  display: flex;
  flex-direction: column;
  height: 70%;
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
`;

export const CategoryName = styled(Link)`
  margin-top: 12px;
  font-size: 25px;
  font-family: ${(props) => props.theme.fonts.sansSerif};
  color: ${(props) => props.theme.colors.primary};
  text-decoration: none;
`;
