import React from "react";
import { withRouter } from "react-router";

import { DropDownContainer, DropDownLink } from "../styles/NavbarStyles";
import { ReactComponent as LogOutIcon } from "../svg/logout.svg";
import { ReactComponent as PackageIcon } from "../svg/package.svg";

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
      <DropDownLink onClick={handleOrdersClick}>
        <PackageIcon style={{ width: "20px", marginRight: "14px" }} />
        Orders
      </DropDownLink>
      <DropDownLink onClick={handleSignOut}>
        <LogOutIcon style={{ width: "23px", marginRight: "14px" }} />
        Sign out
      </DropDownLink>
    </DropDownContainer>
  );
};

export default withRouter(UserDropDown);
