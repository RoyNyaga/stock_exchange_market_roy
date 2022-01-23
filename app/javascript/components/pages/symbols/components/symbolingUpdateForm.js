import React, { useState } from 'react';
import styled from 'styled-components';
import BtnGeneral from '../../../shared/btnGeneral';
import axios from 'axios';

const SymbolingUpdateForm = ({ symboling, updateSymboling, handleCancel }) => {
  const [nameInputField, setNameInputField] = useState(symboling.name)
  
  const submit = (e) => {
    console.log(nameInputField)
    e.preventDefault();
    axios.patch(`/symbolings/${symboling.id}`, {
      symboling: {
        name: nameInputField,
        wallet_id: symboling.wallet_id
      }
    })
    .then(response=>{
      updateSymboling(response.data.symboling)
      handleCancel()
    })
    .catch(error=>{
      console.log(error)
    })
  }

  return <Wrapper>
    <input onChange={(e)=>setNameInputField(e.target.value)} defaultValue={symboling.name} type="text" className="form-control" />
    <div className="my-3 d-flex justify-content-center">
      <BtnGeneral option={submit}>Update</BtnGeneral>
    </div>
  </Wrapper>;
}

const Wrapper = styled.form`

`

export default SymbolingUpdateForm;
