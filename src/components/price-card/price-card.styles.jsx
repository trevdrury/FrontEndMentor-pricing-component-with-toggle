import styled from 'styled-components'
import { colors, gradient } from '../../colors'

export const PriceCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${ props => props.planType === 'Professional' ? gradient : 'white' };
  color: ${ props => props.planType === 'Professional' ? 'white' : colors.grayishBlue };
  width: 100%;
  box-shadow: 0px 20px 40px rgba(212, 210, 244, 0.5);
  border-radius: 10px;
  text-align: center;
  padding: 3.0rem;
`

export const PlanType = styled.span`
  font-size: 1.8rem;
  line-height: 2.8rem;
  text-align: center;
  text-transform: capitalize;
`

export const Price = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 7.2rem;
  line-height: 7.1rem;
  color: ${ props => props.plan === 'Professional' ? 'white' : '#4a4d60' };
  margin: 2.4rem;
`

export const Currency = styled.span`
  font-size: 4.0rem;
  line-height: 4.9rem;
  margin-right: 0.6rem;
`

export const Divider = styled.div`
  width: 269px;
  height: 1px;
  background: #6e728e;
  opacity: 0.25;
`

export const SellingPoint = styled.span`
  line-height: 28px;
  text-align: center;
  padding: 1.2rem;
`

export const LearnMoreButton = styled.button`
  width: 100%;
  height: 4.4rem;
  background: ${ props => props.plan === 'Professional' ? 'white' : gradient };
  border-radius: 6px;
  border: none;
  outline: none;
  color: ${ props => props.plan === 'Professional' ? colors.purpleText : 'white' };
  font-weight: bold;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 1.39286px;
  margin-top: 3.2rem;
  cursor: pointer;
`