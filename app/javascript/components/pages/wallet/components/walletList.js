import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import WalletCreateForm from './walletCreateForm';
import Wallet from './wallet';

const WalletList = () => {
  const [ wallets, setWallets ] = useState([])
  const [ selectedWalletId, setSellectedWalletId ] = useState(1)

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

  const selectWallet = (e) => {
    setSellectedWalletId(e.target.id)
  }

  const renderWalletAsSelected = (wallet) => {
    if(wallet.id == selectedWalletId){
      return <Wallet selected={true} selectWallet={selectWallet} key={wallet.id} id={wallet.id} wallet={wallet}/>
    }else{
      return <Wallet selected={false} selectWallet={selectWallet} key={wallet.id} id={wallet.id} wallet={wallet}/>
    }
  }

  return <Wrapper>
    <div className="row">
      <div className="col-md-4 wallet-create-form-div my-5">
        <WalletCreateForm  increaseWallets={increaseWallets}/>
        <div className="wallets-list-div">
          { wallets.length > 0 ? wallets.map((wallet) => renderWalletAsSelected(wallet)) : null }
        </div>
      </div>
      <div className="col-md-3 notifications-div"></div>
      <div className="col-md-5 symbol-div"></div>
    </div>
  </Wrapper>;
}

const Wrapper = styled.div`
 
`

export default WalletList;