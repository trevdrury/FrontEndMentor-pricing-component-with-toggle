import React from "react";

import {
  PriceCardContainer,
  PlanType,
  Price,
  Divider,
  Currency,
  SellingPoint,
  LearnMoreButton,
} from "./price-card.styles.jsx";

const PriceCard = ({ option, productDetails }) => {
  const {
    planType,
    monthlyPrice,
    annualPrice,
    maxStorage,
    maxUsers,
    maxSend,
  } = productDetails;

  return (
    <PriceCardContainer planType={planType}>
      <PlanType>{planType}</PlanType>
      <Price plan={planType}>
        <Currency>$</Currency>
        {option === "monthly" ? monthlyPrice : annualPrice}
      </Price>
      <Divider plan={planType} />
      <SellingPoint>{maxStorage} GB Storage</SellingPoint>
      <Divider plan={planType} />
      <SellingPoint>{maxUsers} Users Allowed</SellingPoint>
      <Divider plan={planType} />
      <SellingPoint>Send up to {maxSend} GB</SellingPoint>
      <Divider plan={planType} />
      <LearnMoreButton plan={planType}>LEARN MORE</LearnMoreButton>
    </PriceCardContainer>
  );
};

export default PriceCard;
