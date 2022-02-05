import React from "react";

import { ServicesContainer } from "../styles/HomeStyles";

import ServicesCard from "./ServicesCard";

import certificate from "../svg/certificate.svg";
import truck from "../svg/truck.svg";
import returns from "../svg/return.svg";

const Services = () => {
  return (
    <ServicesContainer>
      {Object.keys(services).map((key) => (
        <ServicesCard
          title={services[key].title}
          description={services[key].description}
          logo={services[key].logo}
        />
      ))}
    </ServicesContainer>
  );
};

export default Services;

const services = {
  art: {
    title: "Authentic",
    description:
      "All art pieces are unique and come with an authencity certificate.",
    logo: certificate,
  },
  shipping: {
    title: "Free Shipping",
    description:
      "Free expedited domestic and international shipping.",
    logo: truck,
  },
  returns: {
    title: "Easy Returns",
    description:
      "Free returns with in 15 days if you are not satisfied with the product.",
    logo: returns,
  },
};
