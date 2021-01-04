import React from 'react'

import { PriceCardContainer, PlanType, Price, Currency, Divider, SellingPoint, LearnMoreButton } from './price-card.styles.jsx'

const PriceCard = ({ productDetails }) => {
  const { planType, price, maxStorage, maxUsers, maxSend } = productDetails

  return (
    <PriceCardContainer planType={planType}>
      <PlanType>{planType}</PlanType>
      <Price>
        <Currency>$</Currency>{price}
      </Price>
      <Divider />
      <SellingPoint>{maxStorage} GB Storage</SellingPoint>
      <Divider />
      <SellingPoint>{maxUsers} Users Allowed</SellingPoint>
      <Divider />
      <SellingPoint>Send up to {maxSend} GB</SellingPoint>
      <Divider />
      <LearnMoreButton plan={planType}>LEARN MORE</LearnMoreButton>
    </PriceCardContainer>
  )
}

export default PriceCard

