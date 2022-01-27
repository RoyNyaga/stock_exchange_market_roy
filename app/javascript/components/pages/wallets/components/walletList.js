import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import WalletCreateForm from './walletCreateForm';
import Wallet from './wallet';
import SelectedWallet from './selectedWallet';
import NotificationList from '../../notifications/notificationList';
import BtnGeneral from '../../../shared/btnGeneral';
import WalletEndOfDayData from './walletEndOfDayData';
import WalletEndOfDayDataList from './walletEndOfDayDataList';
import DisplayErrorMessages from '../../../shared/displayErrorMessages';

const WalletList = () => {
  const [ wallets, setWallets ] = useState([])
  const [ selectedWalletId, setSellectedWalletId ] = useState()
  const [ symbolingsOfSelectedWallet, setSymbolingsOfSelectedWallet] = useState([])
  const [ walletNotifications, setWalletNotifications ] = useState([])
  const [ walletEndOfDaySymbolingData, setWalletEndOfDaySymbolingData ] = useState([])
  const [ btnLoad, setBtnLoad ] = useState(false)
  const [ errorMessages, setErrorMessages ] = useState([])
  const [ symbolErrorMessage, setSymbolErrorMessage] = useState([])

  const updateSymboling = (symboling) => {
    const symbolings = symbolingsOfSelectedWallet.filter((s) => s.id != symboling.id)
    setSymbolingsOfSelectedWallet([...symbolings, symboling])
  }

  const toggleSymbolErrorMessages = (type, message=[]) => {
    type == "display" ? setSymbolErrorMessage(message) : setSymbolErrorMessage([])
  }

  const showErrors = (errorMessages) => {
    setErrorMessages(errorMessages)
  }

  const dismissErrors = () => {
    setErrorMessages([])
  }

  const increaseSymbolings = (symboling) => {
    setSymbolingsOfSelectedWallet(previous => [...previous, symboling])
    getWalletNotifications(symboling.wallet_id)
  }

  const reduceSymbolings = (symboling) => {
    setSymbolingsOfSelectedWallet(previous => [...previous].filter((s) => s.id != symboling.id ))
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

  const getWalletNotifications = (walletId) => {
    console.log(walletId)
    axios.get(`/wallets/${walletId}/notifications`)
    .then(response => {
      console.log("response", response.data)
      setWalletNotifications(response.data)
    })
    .then(error=>{
      console.log(error)
    })
  }

  const increaseWallets = (wallet) => {
    setWallets(previous => [wallet, ...previous])
    setSellectedWalletId(wallet.id)
  }
  
  const getWallets = () => {
    axios.get("/wallets/index")
    .then(response => {
      const selectedWallet = response.data[0]
      setSellectedWalletId(selectedWallet.id)
      getWalletSymbolings(selectedWallet.id)
      setWallets(response.data)
      getWalletNotifications(selectedWallet.id)
    })
  }

  const selectWallet = (e) => {
    const walletId = e.target.id
    setSellectedWalletId(walletId)
    getWalletSymbolings(walletId)
    getWalletNotifications(walletId)
    setWalletEndOfDaySymbolingData([])
    setErrorMessages([])
    toggleSymbolErrorMessages("hide")
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

  const getEndOfDayDataForAllSymbols = () => {
    setBtnLoad(true)
    axios.get(`/wallets/${getSelectedWallet.id}/symbol_end_of_day_data`)
    .then(response => {
      setWalletEndOfDaySymbolingData(response.data)
      setBtnLoad(false)
    })
  }


  return <Wrapper>
    <div className="row">
      <div className="col-md-4 wallet-create-form-div my-5">
        <WalletCreateForm showErrors={showErrors}  increaseWallets={increaseWallets}
        dismissErrors={dismissErrors}/>

        { errorMessages.length > 0 ? <DisplayErrorMessages messages={errorMessages} />
        : null }

        <div className="wallets-list-div">
          { wallets.length > 0 ? wallets.map((wallet) => renderWalletAsSelected(wallet)) : null }
        </div>
      </div>
      <div className="col-md-4 notifications-div">
        <WalletEndOfDayDataList endOfDayData={walletEndOfDaySymbolingData} wallet={getSelectedWallet}/>
        <NotificationList notifications={walletNotifications}/>
      </div>
      <div className="col-md-4 symbol-div py-5">
        { wallets.length > 0 ? <SelectedWallet wallet={getSelectedWallet} 
        symbolings={symbolingsOfSelectedWallet}
        increaseSymbolings={increaseSymbolings}
        updateSymboling={updateSymboling}
        reduceSymbolings={reduceSymbolings}
        toggleSymbolErrorMessages={toggleSymbolErrorMessages}
        symbolErrorMessage={symbolErrorMessage}/> : null }

        <div className="end-of-day-data-btn my-5 d-flex justify-content-center">
          { symbolingsOfSelectedWallet.length > 0 ?
          <BtnGeneral loading={btnLoad} option={getEndOfDayDataForAllSymbols}>Get end of day data for all symbolgs</BtnGeneral>
          :
          null
        } 
        </div>
      </div>
    </div>
  </Wrapper>;
}

const Wrapper = styled.div`
  
`

export default WalletList;