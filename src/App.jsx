import React, { useState } from "react";
import "./App.css";
import { PriceFeatureContainer, PriceCardContainer } from "./app.styles";
import PriceToggle from "./components/price-toggle/price-toggle.component";
import PriceCard from "./components/price-card/price-card.component";

const plans = [
  {
    planType: "basic",
    monthlyPrice: "19.99",
    annualPrice: "199.99",
    maxStorage: "500 GB",
    maxUsers: "2",
    maxSend: "3",
  },
  {
    planType: "professional",
    monthlyPrice: "24.99",
    annualPrice: "249.99",
    maxStorage: "1 TB",
    maxUsers: "5",
    maxSend: "10 GB",
  },
  {
    planType: "master",
    monthlyPrice: "39.99",
    annualPrice: "399.99",
    maxStorage: "2 TB",
    maxUsers: "10",
    maxSend: "20 GB",
  },
];

function App() {
  const [option, setOption] = useState("monthly");

  const handleToggle = () => {
    if (option === "monthly") {
      setOption("annually");
    } else {
      setOption("monthly");
    }
  };

  return (
    <div className="App">
      <PriceFeatureContainer>
        <h1>Our Pricing</h1>
        <PriceToggle option={option} handleToggle={handleToggle} />
        <PriceCardContainer>
          {plans.map((plan) => (
            <PriceCard
              key={plan.planType}
              option={option}
              productDetails={plan}
            />
          ))}
        </PriceCardContainer>
      </PriceFeatureContainer>
    </div>
  );
}

export default App;
