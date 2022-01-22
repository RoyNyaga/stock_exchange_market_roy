import React from 'react';
import styled from 'styled-components';
import BtnGeneral from '../../../shared/btnGeneral';

const WalletCreateForm = () => {
  return <Wrapper>
    <input type="text" className="form-control" placeholder='Enter Wallet Name' />
    <div className="d-flex justify-content-center my-4">
      <BtnGeneral>Add Wallet</BtnGeneral>
    </div>
  </Wrapper>;
}

const Wrapper = styled.form`

`

export default WalletCreateForm;
