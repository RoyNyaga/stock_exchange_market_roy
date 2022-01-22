import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import WalletCreateForm from './walletCreateForm';

const WalletList = () => {
  const [ wallets, setWallets ] = useState([])

  useEffect(() => {
    getWallets()
  }, []);
  
  const getWallets = () => {
    axios.get("/wallets/index")
    .then(response => {
      console.log(response)
    })
  }

  return <Wrapper>
    <div class="wallet-create-form row">
      <div class="col-md-5 mx-auto my-5">
        <WalletCreateForm />
      </div>
    </div>
  </Wrapper>;
}

const Wrapper = styled.div`

`

export default WalletList;