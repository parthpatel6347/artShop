import styled from "styled-components";
import { Link } from "react-router-dom";

export const SuccessMain = styled.div`
  margin-top: 75px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CheckIconContainer = styled.div`
  width: 100px;
  color: ${(props) => props.theme.colors.success};
  border: 4px solid ${(props) => props.theme.colors.success};
  border-radius: 50%;
  padding: 10px;
  box-sizing: border-box;
`;

export const SuccessTitle = styled.span`
  font-size: 35px;
  font-family: ${(props) => props.theme.fonts.serif};
  color: ${(props) => props.theme.colors.success};
  font-weight: 500;
  letter-spacing: 1px;
  margin: 5px 0 40px;
`;

export const SuccessInfo = styled.span`
  font-size: 18px;
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.sans};
  font-weight: 600;
  letter-spacing: 0.5px;
  text-decoration: none;
`;

export const LinkText = styled(Link)`
  font-size: 22px;
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.sans};
  font-weight: 600;
  letter-spacing: 0.5px;
  margin-top: 40px;
`;
