import React, { useState } from 'react';
import styled from 'styled-components';
import BtnGeneral from '../../../shared/btnGeneral';
import axios from 'axios';

const SymbolCreateForm = ({ wallet, increaseSymbolings }) => {
  const [nameInputFieldValue, setNameInputFieldValue] = useState("")

  const submit = (e) => {
    e.preventDefault();
    axios.post(`/symbolings`, {
      symboling: {
        name: nameInputFieldValue,
        wallet_id: wallet.id
      }
    })
    .then(response=>{
      // increaseSymbolings(response.data.symboling)
      console.log(response.data)
    })
    .catch(error=>{
      console.log(error)
    })
  }

  return <Wrapper>
    <input type="text" onChange={(e)=> setNameInputFieldValue(e.target.value)} className="form-control" placeholder='Enter symbol name'/>
    <div className="d-flex justify-content-center my-4">
      <BtnGeneral option={submit}>Add Symbol</BtnGeneral>
    </div>
  </Wrapper>;
}

const Wrapper = styled.form`

`

export default SymbolCreateForm;
