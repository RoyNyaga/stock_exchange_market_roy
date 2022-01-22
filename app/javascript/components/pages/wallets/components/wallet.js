import React from 'react';
import styled from 'styled-components';
import WalletList from './walletList';

const Wallet = (props) => {
  const { wallet, selectWallet, id, selected } = props;
  return <Wrapper selected={selected} id={id} onClick={(e)=>selectWallet(e)}>
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
  background: ${props => (props.selected ? "#1a6c9b" : "#052c41" )};

  :hover{
    background: #1a6c9b;
  }
`

export default Wallet;
