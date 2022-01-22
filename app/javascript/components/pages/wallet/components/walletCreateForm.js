import React from 'react';
import styled from 'styled-components';

const WalletCreateForm = () => {
  return <Wrapper>
    <input type="text" className="form-control" placeholder='Enter Wallet Name' />
  </Wrapper>;
}

const Wrapper = styled.form`

`

export default WalletCreateForm;
