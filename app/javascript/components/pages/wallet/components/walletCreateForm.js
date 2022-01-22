import React, { useState } from 'react';
import styled from 'styled-components';
import BtnGeneral from '../../../shared/btnGeneral';
import axios from 'axios';

// avoiding CSRF errors, I book marked an article for this.
const token = document.querySelector('[name=csrf-token]').content
axios.defaults.headers.common['X-CSRF-TOKEN'] = token

const WalletCreateForm = ({ increaseWallets }) => {
  const [ nameInputField, setNameInputField ] = useState("");
  const submit = (e) => {
    e.preventDefault()
    axios.post("/wallets", {
      wallet: { name: nameInputField }
    })
    .then(response=>{
      increaseWallets(response.data.wallet)
    })
    .catch(error=>{
      console.log(error)
    })
  }

  return <Wrapper>
    <input type="text" onChange={(e)=>{setNameInputField(e.target.value)}} className="form-control" placeholder='Enter Wallet Name' />
    <div className="d-flex justify-content-center my-4">
      <BtnGeneral option={submit}>Add Wallet</BtnGeneral>
    </div>
  </Wrapper>;
}

const Wrapper = styled.form`

`

export default WalletCreateForm;
