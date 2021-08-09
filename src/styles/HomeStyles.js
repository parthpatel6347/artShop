import styled from "styled-components";
import { Link } from "react-router-dom";

export const HomeContainer = styled.div`
  box-sizing: border-box;
  border: 1px dotted black; //////////////
  width: 65%;
  margin: 0 auto;
  height: 70vh;
  display: flex;
`;

export const ContainerRight = styled.div`
  border: 1px dotted pink; ////////////////
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextContainer = styled.span`
  border: 1px dotted blue; ////////////
  font-size: 60px;
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.sansSerif};
`;

export const SubText = styled.span`
  border: 1px dotted blue; ////////////
  font-size: 30px;
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.sans};
`;

export const ContainerLeft = styled.div`
  border: 1px dotted pink; ////////////////
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ButtonStyled = styled(Link)`
  background-color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.sans};
  color: white;
  margin-right: auto;
  height: 40px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  padding: 6px 30px;
  font-size: 20px;
  box-sizing: border-box;
`;

export const ImageContainer = styled.div`
  position: relative;
  height: 610px;
  width: 455px;
`;

export const ImageStyled = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 385px;
  height: 540px;
  background-image: url(https://images.unsplash.com/photo-1617503752587-97d2103a96ea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1919&q=80);
  background-size: cover;
  background-position: center;
`;

const Frame = styled.div`
  position: absolute;
  width: 385px;
  height: 540px;
  box-sizing: border-box;
  border: 4px solid ${(props) => props.theme.colors.gold};
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
`;

//Separator text styles

export const SeparatorContainer = styled.div`
  width: 40%;
  border: 1px dotted red; ///////////
  margin: 0 auto;
  box-sizing: border-box;
  font-size: 35px;
  font-family: ${(props) => props.theme.fonts.sansSerif};
  text-align: center;
  color: ${(props) => props.theme.colors.primary};
  border-bottom: 1px solid ${(props) => props.theme.colors.primary};
  padding-bottom: 20px;
  margin-top: 30px;
`;

// Category styles

export const CategoryContainer = styled.div`
  display: flex;
  border: 1px dotted purple;
  width: 65%;
  margin: 0 auto;
`;

export const CategoryInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CategoryTitle = styled.span`
  font-family: ${(props) => props.theme.fonts.sansSerif};
  color: ${(props) => props.theme.colors.primary};
  font-size: 45px;
`;

export const CategoryDescription = styled.span`
  font-family: ${(props) => props.theme.fonts.sans};
  color: ${(props) => props.theme.colors.primary};
  font-size: 24px;
`;
