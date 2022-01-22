import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import WalletCreateForm from './walletCreateForm';

const WalletList = () => {
  const [ wallets, setWallets ] = useState([])

  useEffect(() => {
    getWallets()
  }, []);

  const increaseWallets = (wallet) => {
    setWallets(previous => [...previous, wallet])
  }
  
  const getWallets = () => {
    axios.get("/wallets/index")
    .then(response => {
      setWallets(response.data)
    })
  }

  return <Wrapper>
    <div className="wallet-create-form row">
      <h1>{ wallets.length}</h1>
      <div className="col-md-5 mx-auto my-5">
        <WalletCreateForm  increaseWallets={increaseWallets}/>
      </div>
    </div>
  </Wrapper>;
}

const Wrapper = styled.div`

`

export default WalletList;