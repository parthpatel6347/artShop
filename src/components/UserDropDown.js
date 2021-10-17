import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { clearOrders } from "../redux/orders/ordersActions";

import { DropDownContainer, DropDownLink } from "../styles/NavbarStyles";
import { ReactComponent as LogOutIcon } from "../svg/logout.svg";
import { ReactComponent as PackageIcon } from "../svg/package.svg";

const UserDropDown = ({ signOut, history, toggleDropdown, clearOrders }) => {
  const handleOrdersClick = () => {
    toggleDropdown();
    history.push("/orders");
  };

  const handleSignOut = () => {
    toggleDropdown();
    signOut();
    history.push("/");
    clearOrders();
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

const mapDispatchToProps = (dispatch) => ({
  clearOrders: () => dispatch(clearOrders()),
});

export default withRouter(connect(null, mapDispatchToProps)(UserDropDown));
