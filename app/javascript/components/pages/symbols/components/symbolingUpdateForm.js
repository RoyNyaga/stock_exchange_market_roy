import React, { useState } from 'react';
import styled from 'styled-components';
import BtnGeneral from '../../../shared/btnGeneral';
import DisplayErrorMessages from "../../../shared/displayErrorMessages"
import axios from 'axios';
import Notify from '../../../shared/notify';

const SymbolingUpdateForm = ({ symboling, updateSymboling, handleCancel }) => {
  const [nameInputField, setNameInputField] = useState(symboling.name)
  const [erroMessage, setErrorMessage] = useState([])
  const [ btnLoad, setBtnLoad ] = useState(false)

  const submit = (e) => {
    e.preventDefault();
    setBtnLoad(true)
    setErrorMessage([])

    axios.patch(`/symbolings/${symboling.id}`, {
      symboling: {
        name: nameInputField.toUpperCase(),
        wallet_id: symboling.wallet_id
      }
    })
    .then(response=>{
      if(response.data.status == "succeeded"){
        updateSymboling(response.data.symboling)
        Notify.success(`${response.data.symboling.name} was successfully added!`)
        handleCancel()
      }else{
        setErrorMessage(response.data.message)
      }
      setBtnLoad(false)
    })
    .catch(error=>{
    })
  }

  return <Wrapper>
    <input onChange={(e)=>setNameInputField(e.target.value)} defaultValue={symboling.name} type="text" className="form-control" />
    <div className="my-3 d-flex justify-content-center">
      <BtnGeneral loading={btnLoad} option={submit}>Update</BtnGeneral>
    </div>
    { erroMessage.length > 0 ? <DisplayErrorMessages messages={erroMessage}/> : null}
  </Wrapper>;
}

const Wrapper = styled.form`

`

export default SymbolingUpdateForm;
