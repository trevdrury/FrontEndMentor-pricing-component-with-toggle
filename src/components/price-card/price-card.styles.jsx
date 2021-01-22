import styled from "styled-components";
import { colors, gradient } from "../../colors";

export const PriceCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) =>
    props.planType === "professional" ? gradient : "white"};
  color: ${(props) =>
    props.planType === "professional" ? "white" : colors.grayishBlue};
  width: 100%;
  width: 32.6rem;
  box-shadow: 0px 20px 40px rgba(212, 210, 244, 0.5);
  border-radius: 10px;
  text-align: center;
  padding: 3rem;
  margin: 1.6rem 0;

  @media (min-width: 1060px) {
    width: 35rem;
    height: ${(props) =>
      props.planType === "professional" ? "501px" : "453px"};
    padding: ${(props) =>
      props.planType === "professional" ? "4.5rem 0" : "2.0rem"};
  }
`;

export const Divider = styled.hr`
  width: 269px;
  height: 1px;
  border: 0;
  border-top: ${(props) =>
    props.plan === "professional" ? "1px solid #fff" : "1px solid #6e728e"};
  opacity: 0.25;
  margin: 0.6rem 0;
`;

export const PlanType = styled.span`
  font-size: 1.8rem;
  line-height: 2.8rem;
  text-align: center;
  text-transform: capitalize;
`;

export const Price = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 7.2rem;
  line-height: 7.1rem;
  color: ${(props) => (props.plan === "professional" ? "white" : "#4a4d60")};
  margin: 2.4rem 0;
`;

export const Currency = styled.span`
  font-size: 4rem;
  line-height: 4.9rem;
  margin-right: 0.6rem;
`;

export const SellingPoint = styled.span`
  text-align: center;
  padding: 1.2rem;
`;

export const LearnMoreButton = styled.button`
  width: 100%;
  height: 4.4rem;
  background: ${(props) =>
    props.plan === "professional" ? "white" : gradient};
  border-radius: 6px;
  border: none;
  outline: none;
  color: ${(props) =>
    props.plan === "professional" ? colors.purpleText : "white"};
  font-weight: bold;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 1.39286px;
  margin-top: 3.2rem;
  cursor: pointer;

  &:hover {
    border: 1px solid
      ${(props) =>
        props.plan === "professional" ? "white" : colors.purpleText};
    background: none;
    color: ${(props) =>
      props.plan === "professional" ? "white" : colors.purpleText};
  }

  @media (min-width: 1060px) {
    min-height: 4.4rem;
    width: 28.8rem;
    margin: 3.1rem 0;
  }
`;
