import React from 'react';
import styled from 'styled-components';

const Notification = ({ notification }) => {
  return <Wrapper>
    <h5>{ notification.content }</h5>
  </Wrapper>;
}

const Wrapper = styled.div`
  margin: 10px 0;
  border-bottom: 2px solid white;
  padding: 2px;
  h5{
    color: orange;
  }
`

export default Notification;


