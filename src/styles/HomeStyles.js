import styled from "styled-components";
import { Link } from "react-router-dom";
import { maxWidth } from "./size";

export const HomeContainer = styled.div`
  /* border: 1px dotted black; */
  width: 1400px;
  margin: 0 auto 75px;
  height: 650px;
  display: flex;
  justify-content: space-around;
  @media ${maxWidth.XXL} {
    max-width: 85%;
    justify-content: space-between;
  }
  @media ${maxWidth.M} {
    flex-direction: column;
    height: unset;
  }
`;

export const ContainerRight = styled.div`
  /* border: 1px dotted pink; */
  height: 100%;
  /* width: 50%; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextContainer = styled.span`
  /* border: 1px dotted blue; */

  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  @media ${maxWidth.M} {
    text-align: center;
    margin: 30px 0 20px;
  }
`;

export const MainText = styled.span`
  font-size: 60px;
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.sansSerif};
  line-height: 65px;
  @media ${maxWidth.XL} {
    font-size: 50px;
    font-weight: 500;
    line-height: 60px;
  }
  @media ${maxWidth.L} {
    font-size: 45px;
    line-height: 55px;
  }
  @media ${maxWidth.M} {
    font-size: 35px;
    line-height: 45px;
    font-weight: 600;
  }
`;

export const MainTextBG = styled(MainText)`
  background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 65%, rgba(246,194,92,0.67) 65%, rgba(246,194,92,0.67) 95%,rgba(255,255,255,0) 95%);
`

export const SubText = styled.span`
  font-size: 22px;
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.sans};
  margin-bottom: 40px;
  font-weight: 500;
  width: 70%;
  @media ${maxWidth.XL} {
    font-size: 20px;
    font-weight: 600;
  }
  @media ${maxWidth.M} {
    text-align: center;
    margin-bottom: 23px;
    font-size: 19px;
    font-weight: 500;
  }
`;

export const ContainerLeft = styled.div`
  /* border: 1px dotted pink; */
  height: 100%;
  /* width: 50%; */
  display: flex;
  justify-content: center;
`;

export const ContainerLeftInner = styled.div`
  /* border: 1px dotted pink; */
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media ${maxWidth.M} {
    align-items: center;
  }
`;

export const ButtonStyled = styled(Link)`
  /* border-radius: 5px; */
  background-color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.sans};
  color: ${(props) => props.theme.colors.bg};
  margin-right: auto;
  height: 40px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  padding: 6px 30px;
  font-size: 20px;
  letter-spacing: 0.5px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.1) 0px 2px 4px -1px;
  transition: all 0.1s ease-out;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 15px -3px,
      rgba(0, 0, 0, 0.15) 0px 4px 6px -2px;
    transform: translateY(-3px);
    background-color: ${(props) => props.theme.colors.gold};
  }
`;

export const SplashButton = styled(ButtonStyled)`
  @media ${maxWidth.M} {
    margin: 0 auto 60px;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  height: 539px;
  width: 400px;
  @media ${maxWidth.L} {
    height: 494px;
    width: 369px;
  }
  @media ${maxWidth.M} {
    height: 444px;
    width: 332px;
  }
`;

export const ImageStyled = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 346px;
  height: 486px;
  background-image: url(https://images.unsplash.com/photo-1589753345288-f86191e89ad7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2095&q=80);
  background-size: cover;
  background-position: center;
  /* box-shadow: rgba(0, 0, 0, 0.13) 5px 5px 5px; */
  @media ${maxWidth.L} {
    height: 437px;
    width: 311px;
  }
  @media ${maxWidth.M} {
    height: 393px;
    width: 280px;
  }
`;

const Frame = styled.div`
  position: absolute;
  width: 346px;
  height: 486px;
  box-sizing: border-box;
  @media ${maxWidth.L} {
    height: 437px;
    width: 311px;
  }
  @media ${maxWidth.M} {
    height: 393px;
    width: 280px;
  }
`;

export const FrameBottom = styled(Frame)`
  top: 0;
  right: 0;
  z-index: 3;
`;

export const FrameTop = styled(Frame)`
  bottom: 0;
  left: 0;
  z-index: 1;
  background-color:${(props) => props.theme.colors.accent} ;
  
`;

//Separator text styles

export const SeparatorContainer = styled.div`
  width: 40%;
  /* border: 1px dotted red; */
  margin: 0 auto;
  box-sizing: border-box;
  font-size: 35px;
  font-family: ${(props) => props.theme.fonts.sansSerif};
  text-align: center;
  color: ${(props) => props.theme.colors.primary};
  border-bottom: 1px solid ${(props) => props.theme.colors.primary};
  padding-bottom: 20px;
  margin-top: 30px;
  margin-bottom: 80px;
  @media ${maxWidth.S} {
    font-size: 28px;
  }
  @media ${maxWidth.XS} {
    width: 60%;
    font-size: 24px;
    margin-bottom: 50px;
  }
  @media ${maxWidth.XXS} {
    width: 80%;
    font-size: 22px;
    margin-bottom: 50px;
  }
`;

// Category styles

export const CategoryContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 1000px;
  margin: 0 auto 50px;
  background-color: ${(props) => props.theme.colors.bgLight};
  padding: 25px;
  box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px -6px;
  @media ${maxWidth.XXL} {
    width: 800px;
  }
  @media ${maxWidth.M} {
    width: 85%;
  }
  @media ${maxWidth.S} {
    padding: 20px;
  }
`;

export const CategoryContainerAlt = styled(CategoryContainer)`
  justify-content: flex-end;
  @media ${maxWidth.XXS} {
    flex-direction: row-reverse;
  }
`;

export const CategoryInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 50px;
  @media ${maxWidth.S} {
    margin-left: 30px;
  }
  @media ${maxWidth.XXS} {
    margin-left: 25px;
  }
`;

export const CategoryInfoAlt = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 50px;
  align-items: flex-end;
  text-align: right;
  @media ${maxWidth.S} {
    margin-right: 30px;
  }
  @media ${maxWidth.XXS} {
    margin-left: 25px;
    text-align: left;
    margin-right: unset;
  }
`;

export const CategoryTitle = styled.span`
  font-family: ${(props) => props.theme.fonts.sansSerif};
  color: ${(props) => props.theme.colors.primary};
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 5px;
  @media ${maxWidth.S} {
    font-size: 25px;
    margin-bottom: 5px;
  }
  @media ${maxWidth.XXS} {
    font-size: 20px;
    margin-bottom: 5px;
  }
`;

export const CategoryDescription = styled.span`
  font-family: ${(props) => props.theme.fonts.sans};
  color: ${(props) => props.theme.colors.primary};
  font-size: 18px;
  letter-spacing: 0.2px;
  margin-bottom: 50px;
  font-weight: 500;
  @media ${maxWidth.S} {
    font-size: 16px;
    margin-bottom: 30px;
    line-height: 19px;
  }
  @media ${maxWidth.XXS} {
    margin-bottom: 0;
    line-height: 18px;
    display: none;
  }
`;

export const CategoryImageContainer = styled.div`
  position: relative;
  height: 270px;
  width: 270px;
  @media ${maxWidth.XXL} {
    height: 216px;
    width: 216px;
  }
  @media ${maxWidth.S} {
    height: 172px;
    width: 172px;
  }
  @media ${maxWidth.XXS} {
    height: 120px;
    width: 120px;
  }
`;

export const CategoryImageContainerAlt = styled(CategoryImageContainer)``;

export const CategoryImage = styled.div`
  position: absolute;
  z-index: 1;
  width: 243px;
  height: 243px;
  bottom: 0;
  right: 0;
  background-size: cover;
  background-position: center;
  @media ${maxWidth.XXL} {
    height: 195px;
    width: 195px;
  }
  @media ${maxWidth.S} {
    height: 156px;
    width: 156px;
  }
  @media ${maxWidth.XXS} {
    height: 109px;
    width: 109px;
  }
`;

export const CategoryImageAlt = styled(CategoryImage)`
  left: 0;
  right: unset;
  @media ${maxWidth.XXS} {
    right: 0;
    left: unset;
  }
`;

export const CategoryFrame = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 243px;
  height: 243px;
  border: 4px solid ${(props) => props.theme.colors.accent};
  box-sizing: border-box;
  
  box-shadow: rgba(0, 0, 0, 0.1) 8px 8px 8px,
    rgba(0, 0, 0, 0.1) 8px 8px 8px inset;
  @media ${maxWidth.XXL} {
    height: 195px;
    width: 195px;
  }
  @media ${maxWidth.S} {
    height: 156px;
    width: 156px;
  }
  @media ${maxWidth.XXS} {
    height: 109px;
    width: 109px;
  }
`;

export const CategoryFrameAlt = styled(CategoryFrame)`
  left: unset;
  right: 0;
  @media ${maxWidth.XXS} {
    left: 0;
    right: unset;
  }
`;

export const CategoryButton = styled(ButtonStyled)`
  height: 38px;
  padding: 6px 25px;
  font-size: 18px;
  font-weight: 400;
  @media ${maxWidth.XS} {
    display: none;
  }
`;

//services styles

export const ServicesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  width: 65%;
  @media ${maxWidth.XL}{
    justify-content: space-between;
    width: 75%;
  }
  @media ${maxWidth.S}{
    width: 85%;
  }
  @media ${maxWidth.XXS}{
    width: 90%;
  }
`;

export const ServiceCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 250px;
  text-align: center;
  @media ${maxWidth.XL}{
    max-width:200px;
  }
  @media ${maxWidth.M}{
    max-width:170px;
  }
  @media ${maxWidth.S}{
    width: 150px;
  }
  @media ${maxWidth.XS}{
    width: 125px;
  }
  @media ${maxWidth.XS}{
    width: 100px;
  }
`;

export const ServiceIcon = styled.img`
  height: 48px;
  opacity:0.6;
  @media ${maxWidth.M}{
    height:35px;
  }
  @media ${maxWidth.XS}{
    height:28px;
  }
  @media ${maxWidth.XXS}{
    height:24px;
  }
`;

export const ServiceTitle = styled.span`
  font-family: ${(props) => props.theme.fonts.sans};
  color: ${(props) => props.theme.colors.primary};
  font-size: 22px;
  margin-top: 10px;
  font-weight:600;
  @media ${maxWidth.M}{
    font-size: 20px;
  }
  @media ${maxWidth.XS}{
    font-size:18px;
  }
  @media ${maxWidth.XXS}{
    font-size:16px;
  }
`;

export const ServiceDescription = styled.span`
  font-size: 18px;
  font-family: ${(props) => props.theme.fonts.sans};
  color: ${(props) => props.theme.colors.primary};
  opacity:0.7;
  margin-top: 10px;
  font-weight: 500;
  @media ${maxWidth.M}{
    font-size: 16px;
  }
  @media ${maxWidth.XS}{
    font-size:14px;
    margin-top:5px;
  }
`;
