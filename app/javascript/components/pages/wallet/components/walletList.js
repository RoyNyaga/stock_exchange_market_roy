import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

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

  </Wrapper>;
}

const Wrapper = styled.div`

`

export default WalletList;