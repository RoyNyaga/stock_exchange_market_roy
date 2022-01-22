import React from 'react';
import styled from 'styled-components';

const Wallet = ({ wallet }) => {
  return <Wrapper>
    { wallet.name }
  </Wrapper>;
}

const Wrapper = styled.div`
  color: white;
  border: 2px solid white;
  margin: 20px 0;
  padding: 5px;
  font-size: 1.5em;
  text-align: center;

  :hover{
    background: green;
  }
`

export default Wallet;
