import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 80px;
`;

export const NavbarInner = styled.div`
  border-bottom: 2px solid ${(props) => props.theme.colors.gold};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 85%;
  box-sizing: border-box;
`;

export const NavLinksContainer = styled.div`
  /* width: 20%; */
  display: flex;
  justify-content: space-between;
`;

export const ShopTitle = styled(Link)`
  font-size: 20px;
  font-family: ${(props) => props.theme.fonts.sansSerif};
  color: ${(props) => props.theme.colors.primary};
  text-decoration: none;
  font-weight: 900;
  letter-spacing: 2px;
  display: flex;
  align-items: center;
`;

export const NavLink = styled(Link)`
  font-size: 18px;
  color: ${(props) => props.theme.colors.gold};
  font-family: ${(props) => props.theme.fonts.sans};
  font-weight: 400;
  letter-spacing: 0.5px;
  text-decoration: none;
  margin-right: 50px;
`;

//Cart Icon styles

export const CartIconMain = styled.div`
  font-size: 18px;
  color: ${(props) => props.theme.colors.gold};
  font-family: ${(props) => props.theme.fonts.sans};
  font-weight: 400;
  letter-spacing: 0.5px;
  display: flex;
`;

export const CartImg = styled.div`
  width: 22px;
`;

export const CartNum = styled.div`
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.colors.gold};
  /* background-color: ${(props) => props.theme.colors.gold}; */
  width: 20px;
  height: 20px;
  font-family: ${(props) => props.theme.fonts.sans};
  font-size: 14px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.gold};
  display: flex;
  align-items: center;
  justify-content: center;
`;

//Cart Menu styles

export const CartMenuMain = styled.div`
  background-color: ${(props) => props.theme.colors.bg};
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  position: absolute;
  width: 240px;
  top: 60px;
  right: 40px;
  z-index: 5;
  display: flex;
  flex-direction: column;
  max-height: 500px;
  padding: 20px 15px 20px 20px;
  box-sizing: border-box;
  border: 1px solid ${(props) => props.theme.colors.gold};
`;

export const CartMenuItemsContainer = styled.div`
  overflow-y: scroll;

  /* width */
  &::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background-color: #f5f0e6;
    border-radius: 2.5px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #d8cebb;
    border-radius: 2.5px;
  }
`;

export const CheckoutButton = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.sans};
  color: white;
  height: 30px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  box-sizing: border-box;
  margin-top: 18px;
  padding: 5px;
  &:hover {
    cursor: pointer;
  }
`;

//Cart menu item styles

export const CartMenuItemMain = styled.div`
  width: 90%;
  display: flex;
  border-bottom: 1px solid ${(props) => props.theme.colors.gold};
  box-sizing: border-box;
  height: 78px;
  padding-bottom: 15px;
  margin-bottom: 15px;
`;

export const CartMenuItemImage = styled.div`
  height: 60px;
  width: 44px;
  background-size: cover;
  background-position: center;
`;

export const CartMenuItemInfo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-family: ${(props) => props.theme.fonts.sans};
  color: ${(props) => props.theme.colors.primary};
  margin-left: 10px;
`;

export const CartMenuName = styled.p`
  font-size: 16px;
  font-weight: 600;
  width: 125px;
  margin: 0 0 3px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${(props) => props.theme.colors.primary};
`;
