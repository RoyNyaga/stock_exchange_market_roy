import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import BtnGeneral from '../../../shared/btnGeneral';
import axios from 'axios';

const SymbolCreateForm = ({ wallet, increaseSymbolings }) => {
  const [symbolingInputValue, setSymbolingInputValue] = useState("")

  const submit = (e) => {
    e.preventDefault();
    axios.post(`/symbolings`, {
      symboling: {
        name: symbolingInputValue,
        wallet_id: wallet.id
      }
    })
    .then(response=>{
      increaseSymbolings(response.data.symboling)
    })
    .catch(error=>{
      console.log(error)
    })
  }

  return <Wrapper>
    <input type="text" onChange={(e)=> setSymbolingInputValue(e.target.value)} className="form-control" placeholder='Enter symbol name'/>
    <div className="d-flex justify-content-center my-4">
      <BtnGeneral option={submit}>Add Symbol</BtnGeneral>
    </div>
  </Wrapper>;
}

const Wrapper = styled.form`

`

export default SymbolCreateForm;
