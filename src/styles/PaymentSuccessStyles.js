import styled from "styled-components";
import { Link } from "react-router-dom";
import { maxWidth } from "./size";


export const SuccessMain = styled.div`
  margin-top: 75px;
  width: 100%;
  height:400px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CheckIconContainer = styled.div`
  width: 100px;
  height: 100px;
  color: ${(props) => props.theme.colors.success};
  border: 4px solid ${(props) => props.theme.colors.success};
  border-radius: 50%;
  padding: 10px;
  box-sizing: border-box;
  @media ${maxWidth.XXS}{
    width: 75px;
    height: 75px;
    border-width: 3px;
    padding: 8px;
  }
`;

export const SuccessTitle = styled.span`
  font-size: 35px;
  font-family: ${(props) => props.theme.fonts.serif};
  color: ${(props) => props.theme.colors.success};
  font-weight: 500;
  letter-spacing: 1px;
  margin: 5px 0 40px;
  @media ${maxWidth.XXS}{
    font-size: 28px;
  }
  
`;

export const SuccessInfo = styled.span`
  font-size: 18px;
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.sans};
  font-weight: 600;
  letter-spacing: 0.5px;
  text-decoration: none;
  text-align: center;
  @media ${maxWidth.S}{
    width: 80%;
  }
  @media ${maxWidth.XXS}{
    font-size: 16px;
  }
`;

export const LinkText = styled(Link)`
  font-size: 22px;
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.sans};
  font-weight: 600;
  letter-spacing: 0.5px;
  margin-top: 40px;
  @media ${maxWidth.XXS}{
    font-size: 19px;
  }
`;
