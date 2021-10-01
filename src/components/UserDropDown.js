import React from "react";
import { withRouter } from "react-router";

import { DropDownContainer, DropDownLink } from "../styles/NavbarStyles";
import { ReactComponent as LogOutIcon } from "../svg/logout.svg";

const UserDropDown = ({ signOut, history, toggleDropdown }) => {
  const handleOrdersClick = () => {
    toggleDropdown();
    history.push("/orders");
  };

  const handleSignOut = () => {
    toggleDropdown();
    signOut();
  };
  return (
    <DropDownContainer>
      <DropDownLink onClick={handleOrdersClick}>Orders</DropDownLink>
      <DropDownLink onClick={handleSignOut}>
        <LogOutIcon style={{ width: "22px", marginRight: "2px" }} />
        Sign out
      </DropDownLink>
    </DropDownContainer>
  );
};

export default withRouter(UserDropDown);
