import React, { useState } from 'react';
import styled from 'styled-components';
import BtnGeneral from '../../../shared/btnGeneral';
import axios from 'axios';
import Notify from '../../../shared/notify';
import DisplayErrorMessages from '../../../shared/displayErrorMessages';

const SymbolCreateForm = ({ wallet, increaseSymbolings, toggleSymbolErrorMessages,
  symbolErrorMessage }) => {
  const [nameInputFieldValue, setNameInputFieldValue] = useState("")
  const [ btnLoad, setBtnLoad ] = useState(false)

  const submit = (e) => {
    e.preventDefault();
    toggleSymbolErrorMessages("hide")
    setBtnLoad(true)
    axios.post(`/symbolings`, {
      symboling: {
        name: nameInputFieldValue,
        wallet_id: wallet.id
      }
    })
    .then(response=>{
      if(response.data.status == "succeeded"){
        const symboling = response.data.symboling
        increaseSymbolings(symboling)
        Notify.success(`${symboling} was successfully added!`)
      }else{
        toggleSymbolErrorMessages("display", response.data.message)
      }
      setBtnLoad(false)
    })
    .catch(error=>{
      console.log(error)
      setBtnLoad(false)
    })
  }

  return <Wrapper>
    <input type="text" onChange={(e)=> setNameInputFieldValue(e.target.value)} className="form-control" placeholder='Enter symbol name'/>
    <div className="d-flex justify-content-center my-4">
      <BtnGeneral loading={btnLoad} option={submit}>Add Symbol</BtnGeneral>
    </div>

    { symbolErrorMessage.length > 0 ? <DisplayErrorMessages messages={symbolErrorMessage}/> : null}
  </Wrapper>;
}

const Wrapper = styled.form`

`

export default SymbolCreateForm;
