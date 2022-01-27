import React, { useState } from 'react';
import styled from 'styled-components';
import BtnGeneral from '../../../shared/btnGeneral';
import axios from 'axios';
import Notify from '../../../shared/notify';

// avoiding CSRF errors, I book marked an article for this.
const token = document.querySelector('[name=csrf-token]').content
axios.defaults.headers.common['X-CSRF-TOKEN'] = token

const WalletCreateForm = ({ increaseWallets, showErrors, dismissErrors }) => {
  const [ nameInputField, setNameInputField ] = useState("");
  const [ btnLoad, setBtnLoad ] = useState(false)

  const submit = (e) => {
    setBtnLoad(true)
    e.preventDefault()
    axios.post("/wallets", {
      wallet: { name: nameInputField }
    })
    .then(response=>{
      if(response.data.status == "succeeded"){
        increaseWallets(response.data.wallet)
        Notify.success(`${response.data.wallet.name} was created successfully`)
        dismissErrors()
      }else{
        showErrors(response.data.message)
      }
      setBtnLoad(false)
    })
    .catch(error=>{
      setBtnLoad(false)
    })
    
  }


  return <Wrapper>
    <input type="text" onChange={(e)=>{setNameInputField(e.target.value)}} className="form-control" placeholder='Enter Wallet Name' />
    <div className="d-flex justify-content-center my-4">
      <BtnGeneral loading={ btnLoad } option={submit}>Add Wallet</BtnGeneral>
    </div>
  </Wrapper>;
}

const Wrapper = styled.form`

`

export default WalletCreateForm;
