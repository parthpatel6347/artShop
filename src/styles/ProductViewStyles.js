import styled from "styled-components";
import { Link } from "react-router-dom";
import { maxWidth } from "./size";

export const ProductViewMain = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductViewContainer = styled.div`
  width: 1100px;
  margin: 25px auto 0;
  padding: 55px;
  display: flex;
  background-color: ${(props) => props.theme.colors.bgLight};
  border-radius: 5px;
  /* border: 1px solid ${(props) => props.theme.colors.gold}; */
  box-shadow: rgba(0, 0, 0, 0.1) 4px 4px 15px;
  @media ${maxWidth.XXL} {
    width: 900px;
    padding: 45px;
  }
  @media ${maxWidth.L} {
    width: 85%;
  }
  @media ${maxWidth.S}{
    flex-direction: column;
  }
  @media ${maxWidth.XXS} {
    margin-top:5px;
    width: 95%;
    padding: 5%;
    background-color: unset;
    box-shadow: none;
  }
`;

export const BackButtonContainer = styled.div`
  width: 85%;
  margin: 30px auto 0;
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
  flex-shrink: 0;
  width: 500px;
  height: 640px;
  padding: 42px;
  border: 5px solid ${(props) => props.theme.colors.accentDark};
  box-shadow: rgba(0, 0, 0, 0.1) 6px 6px 6px,
    rgba(0, 0, 0, 0.1) 6px 6px 6px inset;
  background-color: ${(props) => props.theme.colors.bgLight};
  @media ${maxWidth.XXL} {
    width: 50%;
    height: unset;
    aspect-ratio:500/640;
    padding: 30px;
  }
  @media ${maxWidth.S}{
    max-width: 400px;
    width: 100%;

  }
`;

export const ProductImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  box-shadow: rgba(0, 0, 0, 0.13) 5px 5px 5px;
`;

export const InfoContainer = styled.div`
  padding-left: 65px;
  display: flex;
  flex-direction: column;
  @media ${maxWidth.XXL} {
    padding-left: 50px;
  }
  @media ${maxWidth.S} {
    padding-left: 0;
    margin-top: 20px;
  }
`;

export const ProductTitle = styled.span`
  font-size: 32px;
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.sansSerif};
  font-weight: 700;
  letter-spacing: 0.5px;
  /* text-decoration: underline; */
  margin-bottom: 6px;
  @media ${maxWidth.XXL} {
    font-size: 28px;
    margin-bottom: 5px;
  }
  @media ${maxWidth.XS} {
    font-size: 24px;
    margin-bottom: 0px;
  }
`;

export const ArtistNameContainer = styled.span`
  margin-bottom: 40px;
  @media ${maxWidth.S} {
    margin-bottom: 10px;
  }
`

export const SubText = styled.span`
  font-size: 18px;
  font-family: ${(props) => props.theme.fonts.sans};
  font-weight: 600;
  letter-spacing: 0.5px;
  @media ${maxWidth.XXL} {
    font-size: 16px;
  }
  @media ${maxWidth.XS} {
    font-size: 16px;
  }
`;

export const SubTextPrimary = styled(SubText)`
  color: ${(props) => props.theme.colors.primary};
  opacity:0.7;
`;

export const SubTextGold = styled(SubText)`
  color: ${(props) => props.theme.colors.accentDark};
`;

export const ProductPrice = styled.span`
  font-size: 28px;
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.sansSerif};
  font-weight: 700;
  letter-spacing: 0.5px;
  margin-bottom: 40px;
  @media ${maxWidth.XXL} {
    font-size: 26px;
  }
  @media ${maxWidth.S} {
    margin-bottom: 10px;
    font-size: 20px;
  }
`;

export const Description = styled(SubText)`
  color: ${(props) => props.theme.colors.gold};
  height: 72px;
  overflow: hidden;
  @media ${maxWidth.S} {
    display: none;
  }
`;

export const AddtoCartButton = styled(Link)`
  background-color: ${(props) => props.disabled ? "gray" : props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.sans};
  color: ${(props) => props.theme.colors.bg};
  margin-right: auto;
  height: 40px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 30px;
  font-size: 18px;
  letter-spacing: 0.5px;
  width: 100%;
  margin: 20px auto 0;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.1) 0px 2px 4px -1px;
  transition: all 0.1s ease-out;
  &:hover {
    box-shadow:${props => !props.disabled && "rgba(0, 0, 0, 0.2) 0px 10px 15px -3px, rgba(0, 0, 0, 0.15) 0px 4px 6px -2px"};
    transform: ${props => !props.disabled && "translateY(-3px)"};
    background-color: ${(props) => props.disabled ? "gray" : props.theme.colors.gold};
    cursor: ${props => props.disabled && "default"};
  }
  @media ${maxWidth.S} {
    width:auto;
    margin:20px auto 0 0;
  }

`;
