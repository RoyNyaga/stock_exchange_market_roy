import React from 'react';
import styled from 'styled-components';

const Symboling = ({ symboling }) => {
  return <Wrapper>
    <div className="d-flex justify-content-between text-white">
      <span>{symboling.name}</span>
      <span>edit</span>
      <span>delete</span>
    </div>
  </Wrapper>;
}

const Wrapper = styled.div`
  border: 2px solid #1a6c9b;
  padding: 5px;
  margin: 5px;
`
export default Symboling