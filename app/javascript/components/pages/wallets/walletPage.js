import React from 'react';
import styled from 'styled-components';
import WalletList from './components/walletList';

const walletPage = () => {
  
  return <Wrapper>
    <div className="container-fluid">
      <div className="wallet-list-div">
        <WalletList/>
      </div>
    </div>
  </Wrapper>;
}

const Wrapper = styled.div`

`

export default walletPage;
