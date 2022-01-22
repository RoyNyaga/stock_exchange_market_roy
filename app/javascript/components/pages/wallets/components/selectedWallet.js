import React, { useState } from 'react';
import styled from 'styled-components';
import SymbolCreateForm from '../../symbols/components/symbolCreateForm';

const SelectedWallet = ({ wallet }) => {
  return <Wrapper>
    <h3 className="text-white text-center my-3">{ wallet.name }</h3>
    <div className="symbol-form-div">
      <SymbolCreateForm wallet={wallet}/>
    </div>
  </Wrapper>;
}

const Wrapper = styled.div`

`

export default SelectedWallet;
