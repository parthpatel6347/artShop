import React from "react";

// import styled components
import {
  ServiceCardContainer,
  ServiceDescription,
  ServiceIcon,
  ServiceTitle,
} from "../styles/HomeStyles";

const ServicesCard = ({ title, description, logo }) => {
  return (
    <ServiceCardContainer>
      <ServiceIcon src={logo} />
      <ServiceTitle>{title}</ServiceTitle>
      <ServiceDescription>{description}</ServiceDescription>
    </ServiceCardContainer>
  );
};

export default ServicesCard;
