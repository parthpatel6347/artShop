import React from "react";

import { ServicesContainer } from "../styles/HomeStyles";
import certificate from "../svg/certificate.svg";
import truck from "../svg/truck.svg";
import returns from "../svg/return.svg";
import ServicesCard from "./ServicesCard";

const Services = () => {
  const { art, shipping, returns } = services;
  return (
    <ServicesContainer>
      <ServicesCard
        title={art.title}
        description={art.description}
        logo={art.logo}
      />
      <ServicesCard
        title={shipping.title}
        description={shipping.description}
        logo={shipping.logo}
      />
      <ServicesCard
        title={returns.title}
        description={returns.description}
        logo={returns.logo}
      />
    </ServicesContainer>
  );
};

export default Services;

const services = {
  art: {
    title: "Authentic",
    description:
      "All our art pieces are unique and come with an authencity certificate along with a letter from the artist.",
    logo: certificate,
  },
  shipping: {
    title: "Free Shipping",
    description:
      "We provide free expedited domestic and international shipping.",
    logo: truck,
  },
  returns: {
    title: "Easy Returns",
    description:
      "Free returns with in 15 days if you are not satisfied with the product.",
    logo: returns,
  },
};
