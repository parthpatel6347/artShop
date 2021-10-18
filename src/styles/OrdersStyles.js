import styled from "styled-components";
import { maxWidth } from "./size";

export const OrdersMain = styled.div`
  width: 850px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  @media ${maxWidth.M} {
    width: 85%;
  }
`;

export const OrderItemContainer = styled.div`
  width: 100%;
  height: 142px;
  background-color: ${(props) => props.theme.colors.bgDarker};
  margin-bottom: 20px;
  padding: 15px 15px;
  display: flex;
  align-items: center;
`;

export const ItemImage = styled.div`
  height: 112px;
  width: 82px;
  background-size: cover;
  background-position: center;
`;

export const InfoContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  flex-grow: 2;
  margin-left: 35px;
  @media ${maxWidth.XXS} {
    margin-left: 20px;
  }
`;

export const OrderInfoRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const OrderInfo = styled.span`
  font-size: 16px;
  font-family: ${(props) => props.theme.fonts.sans};
  color: ${(props) => props.theme.colors.primary};
  font-weight: 600;
  letter-spacing: 0.5px;
  @media ${maxWidth.XXS} {
    font-size: 14px;
    letter-spacing: 0.2px;
  }
`;

export const StatusContainer = styled.div`
  height: 30px;
  width: 115px;
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StatusText = styled.span`
  font-size: 15px;
  font-family: ${(props) => props.theme.fonts.sans};
  color: ${(props) => props.theme.colors.bgLight};
  font-weight: 500;
  letter-spacing: 0.5px;
  @media ${maxWidth.XXS} {
    font-size: 14px;
    letter-spacing: 0.5px;
  }
`;

export const InfoTop = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
