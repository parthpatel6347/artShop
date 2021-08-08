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

export const Container = styled.div`
  border: 1px dotted pink; ////////////////
  height: 100%;
  width: 50%;
  display: flex;
`;

export const TextContainer = styled.span`
  border: 1px dotted blue; ////////////
  font-size: 60px;
`;

export const ContainerLeft = styled(Container)`
  flex-direction: column;
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
