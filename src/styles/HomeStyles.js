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
`;

export const ContainerLeft = styled.div`
  border: 1px dotted pink; ////////////////
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SubText = styled.span`
  border: 1px dotted blue; ////////////
  font-size: 30px;
`;

export const ButtonStyled = styled(Link)`
  background-color: black;
  color: white;
  width: 150px;
  height: 40px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  padding: 5px;
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

export const FrameBottom = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  width: 385px;
  height: 540px;
  box-sizing: border-box;
  border: 4px solid black;
`;

export const FrameTop = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 3;
  width: 385px;
  height: 540px;
  box-sizing: border-box;
  border: 4px solid black;
`;
