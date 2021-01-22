import React from "react";
import {
  ToggleContainer,
  ToggleOption,
  ToggleBack,
  ToggleFront,
} from "./price-toggle.styles";

const PriceToggle = ({ option, handleToggle }) => {
  return (
    <ToggleContainer onClick={handleToggle}>
      <ToggleOption>Annually</ToggleOption>
      <ToggleBack>
        <ToggleFront option={option} />
      </ToggleBack>
      <ToggleOption>Monthly</ToggleOption>
    </ToggleContainer>
  );
};

export default PriceToggle;
