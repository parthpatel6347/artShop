import styled from "styled-components";
import { Link } from "react-router-dom";

export const ProductViewMain = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductViewContainer = styled.div`
  box-sizing: border-box;
  width: 1100px;
  margin: -25px auto 0;
  padding: 55px;
  display: flex;
  background-color: ${(props) => props.theme.colors.bgDarker};
  border-radius: 5px;
  /* border: 1px solid ${(props) => props.theme.colors.gold}; */
  /* box-shadow: rgba(0, 0, 0, 0.1) 4px 4px 15px; */
`;

export const BackButtonContainer = styled.div`
  width: 85%;
  margin: 40px auto 0;
`;
export const BackButton = styled(Link)`
  font-size: 19px;
  letter-spacing: 0.3px;
  font-family: ${(props) => props.theme.fonts.sansSerif};
  color: ${(props) => props.theme.colors.gold};
  text-decoration: none;
  display: flex;
  /* width: 137px; */
  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`;

export const ProductImageContainer = styled.div`
  box-sizing: border-box;
  width: 500px;
  height: 640px;
  padding: 42px;
  border: 5px solid ${(props) => props.theme.colors.gold};
  box-shadow: rgba(0, 0, 0, 0.1) 6px 6px 6px,
    rgba(0, 0, 0, 0.1) 6px 6px 6px inset;
  background-color: ${(props) => props.theme.colors.bgLight};
`;

export const ProductImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  box-shadow: rgba(0, 0, 0, 0.13) 5px 5px 5px;
`;

export const InfoContainer = styled.div`
  width: 500px;
  padding-left: 65px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

export const ProductTitle = styled.span`
  font-size: 32px;
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.sansSerif};
  font-weight: 700;
  letter-spacing: 0.5px;
  text-decoration: underline;
  margin-bottom: 6px;
`;

export const SubText = styled.span`
  font-size: 18px;
  font-family: ${(props) => props.theme.fonts.sans};
  font-weight: 600;
  letter-spacing: 0.5px;
`;

export const SubTextPrimary = styled(SubText)`
  color: ${(props) => props.theme.colors.primary};
`;

export const SubTextGold = styled(SubText)`
  color: ${(props) => props.theme.colors.gold};
`;

export const ProductPrice = styled.span`
  font-size: 28px;
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.sansSerif};
  font-weight: 700;
  letter-spacing: 0.5px;
  margin-bottom: 40px;
`;

export const Description = styled(SubText)`
  color: ${(props) => props.theme.colors.gold};
  height: 72px;
  overflow: hidden;
`;

export const ButtonStyled = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.sans};
  color: white;
  height: 40px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  padding: 6px 30px;
  font-size: 20px;
  box-sizing: border-box;
  margin: 40px 0;
  &:hover {
    cursor: pointer;
  }
`;
