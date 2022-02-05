import styled from "styled-components";
import { Link } from "react-router-dom";
import { maxWidth } from "./size";
import { ReactComponent as Logo } from "../svg/logo.svg";

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 70px;
  @media ${maxWidth.XXS} {
    height: 65px;
  }
`;

export const NavbarInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 85%;
  border-bottom: 1px solid ${(props) => props.theme.colors.primary};
`;

export const NavLinksContainer = styled.div`
  /* width: 20%; */
  display: flex;
  justify-content: space-between;
  height: 100%;
  align-items: center;
`;

export const ShopTitle = styled(Link)`
  font-size: 21px;
  font-family: ${(props) => props.theme.fonts.sansSerif};
  color: ${(props) => props.theme.colors.primary};
  text-decoration: none;
  font-weight: 900;
  letter-spacing: 2px;
  display: flex;
  align-items: center;
  @media ${maxWidth.XXS} {
    font-size: 19px;
  }
`;

export const LogoStyled = styled(Logo)`
  margin-left: 25px;
  margin-right: 10px;
  width: 30px;
  @media ${maxWidth.XXS} {
    width: 27px;
    margin-right: 8px;
    margin-left: 0px;

  }
`;

export const NavLink = styled(Link)`
  font-size: 17px;
  color: ${(props) => props.theme.colors.navFont};
  font-family: ${(props) => props.theme.fonts.sans};
  font-weight: 600;
  letter-spacing: 0.5px;
  text-decoration: none;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 25px;
  transition: all 0.1s ease-in;
  box-sizing: unset;
  &:hover {
    background-color: ${(props) => props.theme.colors.accentLight};
    opacity:1;
  }
  @media ${maxWidth.XS} {
    padding: 0 15px;
  }

  @media ${maxWidth.XXS} {
    padding: 0 10px;
    font-size: 17px;
  }
`;

export const NavLinkExplore = styled(NavLink)`
  @media ${maxWidth.M} {
    display: none;
  }
`;

export const NavHighlight = styled.div`
  align-self: flex-end;
`;

//Cart Icon styles

export const CartIconMain = styled.div`
  font-size: 18px;
  color: ${(props) => props.theme.colors.navFont};
  font-family: ${(props) => props.theme.fonts.sans};
  font-weight: 400;
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
`;

export const CartImg = styled.div`
 display: flex;
  align-items: center;
  width: 22px;
  margin-right: 3px;
  @media ${maxWidth.XXS} {
    width: 20px;
    margin-right: 5px;
  }
`;

export const CartNum = styled.div`
  border-radius: 50%;
  border: 1px  solid ${(props) => props.theme.colors.navFont};
  width: 20px;
  height: 20px;
  font-family: ${(props) => props.theme.fonts.sans};
  font-size: 14px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.navFont};
  display: flex;
  align-items: center;
  justify-content: center;
`;

//Cart Menu styles

export const CartMenuMain = styled.div`
  background-color: ${(props) => props.theme.colors.bgLight};
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;  border: 2px solid ${(props) => props.theme.colors.accentLight};
  position: absolute;
  width: 265px;
  top: 70px;
  right: 7.5%;
  z-index: 6;
  display: flex;
  flex-direction: column;
  max-height: 500px;
  padding: 20px 15px 20px 20px;
  box-sizing: border-box;
  transition: opacity 0.3s ease-out;

  @media ${maxWidth.XXS} {
    top: 65px;
  }
  transform-origin: top;

  &.fade-enter {
    opacity: 0;
  }

  &.fade-enter-active {
    opacity: 1;
  }

  &.fade-exit {
    opacity: 1;
  }

  &.fade-exit-active {
    opacity: 0;
  }
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
  border-bottom: 1px solid ${(props) => props.theme.colors.accentLight};
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
  cursor: pointer;
`;

export const CartMenuItemInfo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-family: ${(props) => props.theme.fonts.sans};
  color: ${(props) => props.theme.colors.primary};
  margin-left: 10px;
  cursor: pointer;
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

export const UserIconContiner = styled.div`
  display: flex;
  align-items: center;
  width: 24px;
  margin-right: 4px;
  @media ${maxWidth.XXS} {
    width: 22px;
  }
`;

export const DropDownContainer = styled.div`
  width: 170px;
  position: absolute;
  top: 1px;
  right: -26px;
  display: flex;
  flex-direction: column;
  z-index: 5;
  background-color: ${(props) => props.theme.colors.bgLight};
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;  border: 1px solid ${(props) => props.theme.colors.accentLight};
  padding: 5px 0;
`;

export const DropDownLink = styled.span`
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 17px;
  color: ${(props) => props.theme.colors.navFont};
  font-family: ${(props) => props.theme.fonts.sans};
  font-weight: 600;
  letter-spacing: 0.2;
  text-decoration: none;
  padding: 10px 15px;
  &:hover {
    background-color: ${(props) => props.theme.colors.accentLight};
    cursor: pointer;
  }
  &:first-child {
    border-bottom: 1px solid ${(props) => props.theme.colors.bgDarker};
  }
`;

export const CloseIconContainer = styled.div`
  width: 15px;
  height: 20px;
  display: none;
  color: ${(props) => props.theme.colors.gold};
  &:hover {
    color: ${(props) => props.theme.colors.primary};
    cursor: pointer;
  }
  ${CartMenuItemMain}:hover & {
    display: unset;
  }
  align-self: center;
  margin-left: 5px;
  box-sizing: border-box;
`;

export const UserMenuContainer = styled.div`
  position: relative;
  transition: opacity 0.3s ease-out;
  z-index: 5;

  &.fade-enter {
    opacity: 0;
  }

  &.fade-enter-active {
    opacity: 1;
  }

  &.fade-exit {
    opacity: 1;
  }

  &.fade-exit-active {
    opacity: 0;
  }
`;
