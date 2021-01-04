import React from 'react'
import { ToggleContainer, Annually, Monthly, CheckBoxWrapper, CheckBox, CheckBoxLabel } from './price-toggle.styles'

const PriceToggle = () => (
  <ToggleContainer>
    <Annually>Annually</Annually>
    <CheckBoxWrapper>
      <CheckBox id='checkbox' type='checkbox'/>
      <CheckBoxLabel htmlFor='checkbox'/>
    </CheckBoxWrapper>
    <Monthly>Monthly</Monthly>
  </ToggleContainer>
)

export default PriceToggle