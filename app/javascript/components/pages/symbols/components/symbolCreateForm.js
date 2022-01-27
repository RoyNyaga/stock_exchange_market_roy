import React, { useState } from 'react';
import styled from 'styled-components';
import BtnGeneral from '../../../shared/btnGeneral';
import axios from 'axios';
import Notify from '../../../shared/notify';

const SymbolCreateForm = ({ wallet, increaseSymbolings }) => {
  const [nameInputFieldValue, setNameInputFieldValue] = useState("")
  const [ btnLoad, setBtnLoad ] = useState(false)

  const submit = (e) => {
    setBtnLoad(true)

    e.preventDefault();
    axios.post(`/symbolings`, {
      symboling: {
        name: nameInputFieldValue,
        wallet_id: wallet.id
      }
    })
    .then(response=>{
      const symboling = response.data.symboling
      increaseSymbolings(symboling)
      Notify.success(`${symboling} was successfully added!`)
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
  </Wrapper>;
}

const Wrapper = styled.form`

`

export default SymbolCreateForm;
