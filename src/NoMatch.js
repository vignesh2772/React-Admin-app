import React from 'react';
import styled from 'styled-components';
const Wrapper = styled.div`
  
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(11, 5fr);
  grid-auto-rows: minmax(25px, auto);
`;
export const NoMatch = () => (
  <Wrapper>
    
    <p>Settlements ID</p>
    <p>Amount</p>
    <p>Fees</p>
    <p>Tax</p>
    <p>Creted on</p>
    <p>Status</p>
  </Wrapper>
)