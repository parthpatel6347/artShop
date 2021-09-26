import styled from "styled-components";

export const CheckoutMain = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const CheckoutCartContainer = styled.div`
  width: 850px;
  display: flex;
  flex-direction: column;
`;

export const CheckoutItem = styled.div`
  box-sizing: border-box;
  height: 200px;
  background-color: ${(props) => props.theme.colors.bgDarker};
  margin-bottom: 20px;
  padding: 0 15px;
  display: flex;
  align-items: center;
`;

export const ItemImage = styled.div`
  height: 170px;
  width: 125px;
  background-size: cover;
  background-position: center;
`;

export const ItemInfo = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-grow: 2;
  justify-content: space-between;
  height: 170px;
  margin: 0 25px 0 40px;
  padding: 10px 0;
`;

export const ItemInfoLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ItemText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ItemTitle = styled.span`
  font-size: 22px;
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.sansSerif};
  font-weight: 700;
  letter-spacing: 0.5px;
  margin-bottom: 6px;
`;

export const ItemSubTitle = styled.span`
  font-size: 16px;
  font-family: ${(props) => props.theme.fonts.sans};
  color: ${(props) => props.theme.colors.gold};
  font-weight: 600;
  letter-spacing: 0.5px;
`;

export const IconContainer = styled.div`
  width: 22px;
  color: ${(props) => props.theme.colors.primary};
  opacity: 0.6;
  &:hover {
    opacity: 1;
    transform: scale(1.05);
    cursor: pointer;
  }
`;
