import { Link } from "react-router-dom";
import styled from "styled-components";
import { maxWidth } from "./size";

export const ContainerMain = styled.div`
  margin: 0 auto;
  width: 400px;
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 80px;
  box-sizing: border-box;
  @media ${maxWidth.XXS} {
    width: 90%;
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  height: 460px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 50px;
  border: 2px solid ${(props) => props.theme.colors.accentLight};
  box-sizing: border-box;
  margin-bottom: 20px;
  background-color: ${(props) => props.theme.colors.bgLight};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
`;

export const LoginFormContainer = styled(FormContainer)`
  height: 430px;
`

export const FormContainerBottom = styled(FormContainer)`
  height: unset;
`

export const Header = styled.span`
  font-size: 24px;
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.sansSerif};
  font-weight: 700;
  letter-spacing: 0.5px;
  margin-bottom: 25px;
`;

export const CustomInput = styled.input`
  border: 1px solid ${(props) => props.theme.colors.accentDark};
  margin-bottom: 15px;
  box-sizing: border-box;
  padding: 10px;
  outline: none;
  width: 100%;
  font-family: ${(props) => props.theme.fonts.sans};
  font-weight: 500;
`;

export const ButtonStyled = styled.button`
  outline: none;
  border: none;
  background-color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.sans};
  color: white;
  height: 40px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 30px;
  font-size: 16px;
  font-weight:500;
  box-sizing: border-box;
  margin: 15px 0;
  width: 100%;
  &:hover {
    cursor: pointer;
  }
`;

export const Divider = styled.div`
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.sans};
  display: flex;
  align-items: center;
  opacity: 0.7;
  font-size: 16px;
  font-weight:500;
`;

export const DividerLine = styled.div`
  flex-grow: 1;
  height: 1px;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const ButtonGoogle = styled.div`
  background-color: ${(props) => props.theme.colors.bgLight};
  font-family: ${(props) => props.theme.fonts.sans};
  color: ${(props) => props.theme.colors.primary};
  height: 40px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 30px;
  font-size: 17px;
  box-sizing: border-box;
  font-weight:600;
  margin: 10px 0 0;
  opacity:0.6;
  &:hover {
    cursor: pointer;
  }
`;

export const BottomLink = styled(Link)`
  margin-left: 6px;
  text-decoration: underline;
  font-weight: 700;
  color: ${(props) => props.theme.colors.primary};
`;

export const BottomText = styled.span`
  font-family: ${(props) => props.theme.fonts.sans};
  color: ${(props) => props.theme.colors.primary};
  font-size: 16px;
  font-weight:500;
  opacity:0.7;
`;

export const ErrorText = styled.div`
  color: #EA3842;
  font-family: ${(props) => props.theme.fonts.sans};
  font-size:14px;
  font-weight: 600;
  margin-bottom: 5px;
`