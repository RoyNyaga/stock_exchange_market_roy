import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import WalletCreateForm from './walletCreateForm';
import Wallet from './wallet';
import SelectedWallet from './selectedWallet';

const WalletList = () => {
  const [ wallets, setWallets ] = useState([])
  const [ selectedWalletId, setSellectedWalletId ] = useState()
  const [ symbolingsOfSelectedWallet, setSymbolingsOfSelectedWallet] = useState([])

  const increaseSymbolings = (symboling) => {
    setSymbolingsOfSelectedWallet(previous => [...previous, symboling])
  }

  useEffect(() => {
    getWallets()
  }, []);

  const getWalletSymbolings = (walletId) => {
    axios.get(`/wallets/${walletId}/symbolings`)
    .then(response => {
      console.log(response.data)
      setSymbolingsOfSelectedWallet(response.data)
    })
    .then(error=>{
      console.log(error)
    })
  }

  const increaseWallets = (wallet) => {
    setWallets(previous => [...previous, wallet])
  }
  
  const getWallets = () => {
    axios.get("/wallets/index")
    .then(response => {
      setSellectedWalletId(response.data[0].id)
      getWalletSymbolings(response.data[0].id)
      setWallets(response.data)
    })
  }

  const selectWallet = (e) => {
    setSellectedWalletId(e.target.id)
    getWalletSymbolings(e.target.id)
  }

  const renderWalletAsSelected = (wallet) => {
    if(wallet.id == selectedWalletId){
      return <Wallet selected={true} selectWallet={selectWallet} key={wallet.id} id={wallet.id} wallet={wallet}/>
    }else{
      return <Wallet selected={false} selectWallet={selectWallet} key={wallet.id} id={wallet.id} wallet={wallet}/>
    }
  }

  const getSelectedWallet = wallets.find((wallet)=>{
    return wallet.id == selectedWalletId;
  })


  return <Wrapper>
    <div className="row">
      <div className="col-md-4 wallet-create-form-div my-5">
        <WalletCreateForm  increaseWallets={increaseWallets}/>
        <div className="wallets-list-div">
          { wallets.length > 0 ? wallets.map((wallet) => renderWalletAsSelected(wallet)) : null }
        </div>
      </div>
      <div className="col-md-4 notifications-div">
        <h4 className="text-center text-white py-5">Notifications</h4>
      </div>
      <div className="col-md-4 symbol-div py-5">
        { wallets.length > 0 ? <SelectedWallet wallet={getSelectedWallet} 
        symbolings={symbolingsOfSelectedWallet}
        increaseSymbolings={increaseSymbolings}/> : null }
      </div>
    </div>
  </Wrapper>;
}

const Wrapper = styled.div`
 
`

export default WalletList;