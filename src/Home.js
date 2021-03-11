import React from 'react';
import styled from 'styled-components';
const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 5fr);
  grid-auto-rows: minmax(25px, auto);
`;
export const Home = (props) => (
  <GridWrapper>
    <p>Transaction ID</p>
    <p>Order ID</p>
    <p>Amount</p>
    <p>Creted on</p>
    <p>Payment Gateway</p>
    <p>Status</p>
  </GridWrapper>
)