import React from 'react';
import styled from 'styled-components';

const WalletEndOfDayData = ({ data }) => {
  return <Wrapper className="col-md-6">
    <div className="d-flex justify-content-between bg-danger">
      <span className="data-key">Symbol: </span>
      <span className="text-white">{ data.symbol }</span>
    </div>
    <div className="d-flex justify-content-between"><span className="data-key">Close Price: </span> <span className="text-white">{ data.close }</span></div>
    <div className="d-flex justify-content-between"><span className="data-key">High Price: </span> <span className="text-white">{data.high}</span></div>
    <div className="d-flex justify-content-between"><span className="data-key">Open: </span> <span className="text-white">{data.open}</span></div>
  </Wrapper>;
}

const Wrapper = styled.div`
  margin: 10px 0;
  .data-key{
    color: orange;
  }
`

export default WalletEndOfDayData;
