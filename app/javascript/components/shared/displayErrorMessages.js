import React from 'react'
import styled from 'styled-components';

const DisplayErrorMessages = ({ messages }) => {
  return (
    <Wrapper messages>
      <ul className="error-list">
        {messages.map((message, index) => {
          return(<li className="error-style" key={index}>{message}</li>)
        })}
      </ul>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .error-list{
    list-style: none;
    background: #f7aaaa;
    border-radius: 10%;
    color: #504242;
    padding: 5px;
    font-size: 1.1em;
    border-radius: 10px;
    margin: 10px;
    font-weight: 600;
    align-text: center;
  }
  `



export default DisplayErrorMessages;
