import styled from "styled-components";
import { maxWidth } from "./size";

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
  @media ${maxWidth.M} {
    width: 90%;
  }
`;

export const CheckoutItem = styled.div`
  box-sizing: border-box;
  height: 200px;
  background-color: ${(props) => props.theme.colors.bgLight};
  margin-bottom: 20px;
  padding: 0 15px;
  display: flex;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px -6px;
  @media ${maxWidth.M} {
    height: 150px;
  }
`;

export const ItemImage = styled.div`
  height: 170px;
  width: 125px;
  background-size: cover;
  background-position: center;
  flex-shrink: 0;
  @media ${maxWidth.M} {
    height: 120px;
    width: 90px;
  }
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-grow: 2;
  justify-content: space-between;
  height: 170px;
  margin: 0 25px 0 40px;
  padding: 10px 0;
  @media ${maxWidth.M} {
    height: 120px;
    padding: 0;
  }
  @media ${maxWidth.XS} {
    margin: 0 15px 0 25px;
  }
  @media ${maxWidth.iphone} {
    margin: 0 10px 0 20px;
  }
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
  @media ${maxWidth.M} {
    margin-bottom: 3px;
    font-size: 20px;
  }
  @media ${maxWidth.XS} {
    font-size: 18px;
  }
  @media ${maxWidth.XS} {
    font-size: 18px;
  }
  @media ${maxWidth.XXS} {
    font-size: 17px;
  }
`;

export const ItemSubTitle = styled.span`
  font-size: 16px;
  font-family: ${(props) => props.theme.fonts.sans};
  color: ${(props) => props.theme.colors.primary};
  opacity:0.7;
  font-weight: 600;
  letter-spacing: 0.5px;
  @media ${maxWidth.M} {
    font-size: 15px;
  }
  @media ${maxWidth.XS} {
    font-size: 14px;
  }
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

export const TotalText = styled.span`
  font-size: 22px;
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.sansSerif};
  font-weight: 800;
  letter-spacing: 0.5px;
  margin: -10px 30px 0 0;
  align-self: flex-end;
  @media ${maxWidth.XS} {
    margin-right: 20px;
    font-size: 18px;
  }
`;

export const TitleContainer = styled.div`
  width: 100%;
  border-bottom: 2px solid ${(props) => props.theme.colors.gold};
  margin: 40px auto 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px 5px 15px;
  @media ${maxWidth.M} {
    width: 95%;
  }
  @media ${maxWidth.XS} {
    padding-right: 20px;
  }
  @media ${maxWidth.iphone} {
    padding-right: 15px;
  }
`;

export const Title = styled.span`
  font-size: 32px;
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.sansSerif};
  font-weight: 400;
  letter-spacing: 0.2px;
  @media ${maxWidth.XS} {
    font-size: 28px;
  }
`;

export const ItemCount = styled.span`
  font-size: 20px;
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.sansSerif};
  font-weight: 500;
  letter-spacing: 0.2px;
`;

export const PaymentContainer = styled.div`
  width: 850px;
  display: ${props => props.empty ? "none" : "flex"};
  flex-direction: column;
  margin-bottom: 100px;
  align-items: center;
  @media ${maxWidth.M} {
    width: 90%;
  }
`;

export const EmptyCartText = styled.div`
  font-family: ${(props) => props.theme.fonts.sans};
  font-size:16px;
  font-weight:500;
  text-align:center;
`

export const CardDetailsContainer = styled.div`
  width: 500px;
  border: 1px solid ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.bgLight};
  padding-left: 10px;
  @media ${maxWidth.S} {
    width: 85%;
  }
`;

export const PaymentButton = styled.button`
  background-color: ${(props) => props.disabled ? "gray" : props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.sans};
  color: ${(props) => props.theme.colors.bgLight};
  border:none;
  margin-right: auto;
  height: 40px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 30px;
  font-size: 18px;
  letter-spacing: 0.5px;
  width: 500px;
  margin: 20px auto 0;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.1) 0px 2px 4px -1px;
  transition: all 0.1s ease-out;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 15px -3px,
      rgba(0, 0, 0, 0.15) 0px 4px 6px -2px;
    transform: translateY(-3px);
    background-color: ${(props) => props.disabled ? "gray" : props.theme.colors.primaryHover};
    
  }
  @media ${maxWidth.S} {
    width: 85%;
  }
`;

export const TestCardDetails = styled(ItemSubTitle)`
  width: 500px;
  margin-bottom: 5px;
  @media ${maxWidth.S} {
    width: 85%;
  }
`
