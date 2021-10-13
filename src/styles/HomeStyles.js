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
  }
`;

export const SubText = styled.span`
  /* border: 1px dotted blue;  */
  font-size: 22px;
  color: ${(props) => props.theme.colors.gold};
  font-family: ${(props) => props.theme.fonts.sans};
  margin-bottom: 40px;
  font-weight: 500;
  width: 70%;
  @media ${maxWidth.XL} {
    font-size: 20px;
    font-weight: 600;
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
  /* width: 550px; */
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  /* margin-right: 5%; */
`;

export const ButtonStyled = styled(Link)`
  border-radius: 5px;
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
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  transition: all 0.1s ease-out;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 15px -3px,
      rgba(0, 0, 0, 0.15) 0px 4px 6px -2px;
    transform: translateY(-3px);
    background-color: ${(props) => props.theme.colors.gold};
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  height: 549px;
  width: 410px;
  @media ${maxWidth.L} {
    height: 494px;
    width: 369px;
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
  background-image: url(https://images.unsplash.com/photo-1617503752587-97d2103a96ea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1919&q=80);
  background-size: cover;
  background-position: center;
  box-shadow: rgba(0, 0, 0, 0.13) 5px 5px 5px;
  @media ${maxWidth.L} {
    height: 437px;
    width: 311px;
  }
`;

const Frame = styled.div`
  position: absolute;
  width: 346px;
  height: 486px;
  box-sizing: border-box;
  border: 4px solid ${(props) => props.theme.colors.gold};
  @media ${maxWidth.L} {
    height: 437px;
    width: 311px;
  }
`;

export const FrameBottom = styled(Frame)`
  top: 0;
  right: 0;
  z-index: 1;
`;

export const FrameTop = styled(Frame)`
  bottom: 0;
  left: 0;
  z-index: 3;
  box-shadow: rgba(0, 0, 0, 0.1) 8px 8px 8px,
    rgba(0, 0, 0, 0.1) 8px 8px 8px inset;
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
`;

// Category styles

export const CategoryContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 65%;
  margin: 0 auto 50px;
  background-color: ${(props) => props.theme.colors.bgDarker};
  padding: 30px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
`;

export const CategoryInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 50px;
`;

export const CategoryTitle = styled.span`
  font-family: ${(props) => props.theme.fonts.sansSerif};
  color: ${(props) => props.theme.colors.primary};
  font-size: 40px;
  font-weight: 400;
  margin-bottom: 10px;
`;

export const CategoryDescription = styled.span`
  font-family: ${(props) => props.theme.fonts.sans};
  color: ${(props) => props.theme.colors.gold};
  font-size: 22px;
  margin-bottom: 40px;
`;

export const CategoryImageContainer = styled.div`
  position: relative;
  height: 330px;
  width: 330px;
`;

export const CategoryImage = styled.div`
  position: absolute;
  z-index: 1;
  width: 300px;
  height: 300px;
  bottom: 0;
  right: 0;
  background-size: cover;
  background-position: center;
`;

export const CategoryFrame = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 300px;
  height: 300px;
  border: 4px solid ${(props) => props.theme.colors.gold};
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.1) 8px 8px 8px,
    rgba(0, 0, 0, 0.1) 8px 8px 8px inset;
`;

//services styles

export const ServicesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 65%;
`;

export const ServiceCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  text-align: center;
`;

export const ServiceIcon = styled.img`
  height: 48px;
`;

export const ServiceTitle = styled.span`
  font-family: ${(props) => props.theme.fonts.sans};
  color: ${(props) => props.theme.colors.primary};
  font-size: 24px;
  margin-top: 20px;
`;

export const ServiceDescription = styled.span`
  font-size: 20px;
  font-family: ${(props) => props.theme.fonts.sans};
  color: ${(props) => props.theme.colors.gold};
  margin-top: 10px;
`;
