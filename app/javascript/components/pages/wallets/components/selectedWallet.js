import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SymbolCreateForm from '../../symbols/components/symbolCreateForm';
import Symboling from '../../symbols/components/symboling';
import axios from 'axios';

const SelectedWallet = ({ toggleSymbolErrorMessages, wallet, symbolings, increaseSymbolings, 
  updateSymboling, reduceSymbolings, symbolErrorMessage }) => {
  
  return <Wrapper>
    <h3 className="text-white text-center my-3">{ wallet.name }</h3>
    <div className="symbol-form-div">
      <SymbolCreateForm wallet={wallet} increaseSymbolings={increaseSymbolings}
      toggleSymbolErrorMessages={toggleSymbolErrorMessages}
      symbolErrorMessage={symbolErrorMessage}/>
    </div>

    <div className="symbolings-div row">
      { symbolings.length > 0 ? symbolings.map((symboling=>{
        return<div key={`col-div-${symboling.id}`} className="col-md-6"><Symboling key={symboling.id} symboling={symboling} 
        updateSymboling={updateSymboling} reduceSymbolings={reduceSymbolings}/></div>
      })) 
      :
      null}
    </div>
  </Wrapper>;
}

const Wrapper = styled.div`

`

export default SelectedWallet;
