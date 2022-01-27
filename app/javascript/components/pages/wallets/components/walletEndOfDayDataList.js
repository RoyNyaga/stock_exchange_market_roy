import React from 'react';
import WalletEndOfDayData from './walletEndOfDayData';
import styled from 'styled-components';
const WalletEndOfDayDataList = ({ endOfDayData, wallet}) => {

  return <Wrapper>
      { endOfDayData.length > 0 ? <h4 className="text-white my-5">End of Day symboling data for {wallet.name} Wallet</h4> : null }
      <div className="row"> 
        { endOfDayData.length > 0 ? endOfDayData.map(data => {
          return <WalletEndOfDayData key={data.open} data={data} />
        }) : null }
      </div>;
  </Wrapper>
}

const Wrapper = styled.div`

`

export default WalletEndOfDayDataList;
