import styled from "styled-components";

export const OrdersMain = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const OrderItemContainer = styled.div`
  width: 850px;
  box-sizing: border-box;
  height: 150px;
  background-color: ${(props) => props.theme.colors.bgDarker};
  margin-bottom: 20px;
  padding: 0 15px;
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
  display: flex;
  flex-direction: column;
  flex-grow: 2;
`;

export const OrderInfoRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
export const OrderInfo = styled.span`
  font-size: 18px;
  font-family: ${(props) => props.theme.fonts.sans};
  color: ${(props) => props.theme.colors.primary};
  font-weight: 500;
  letter-spacing: 0.5px;
`;
