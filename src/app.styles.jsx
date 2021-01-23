import styled from "styled-components";

export const PriceFeatureContainer = styled.div`
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  margin: 5rem 2.4rem;
  align-items: center;

  h1 {
    font-size: 3.2rem;
    line-height: 3.9rem;
    text-align: center;
    color: #6e728e;
    padding: 2rem;
  }
`;

export const PriceCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2.8rem;

  @media (min-width: 1060px) {
    flex-direction: row;
    align-items: center;
  }
`;
