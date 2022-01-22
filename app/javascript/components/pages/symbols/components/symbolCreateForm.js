import React, { useState } from 'react';
import styled from 'styled-components';
import BtnGeneral from '../../../shared/btnGeneral';
import axios from 'axios';

const SymbolCreateForm = ({ wallet }) => {
  const [symbolingInputValue, setSymbolingInputValue] = useState("")
  const [symbolings, setSymbolings] = useState([])

  const submit = (e) => {
    e.preventDefault();
    axios.post(`/symbolings`, {
      symboling: {
        name: symbolingInputValue,
        wallet_id: wallet.id
      }
    })
    .then(response=>{
      console.log(response.data)
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
