import React from 'react';
import styled from "styled-components"
import { Spin } from 'antd';

const BtnGeneral = (props) => {
  // setting default props 
  const { type="noSubmit", pY=0, pX=3, marginY=0, marginX=0, loading, fontSize=5, ...restProps } = props;
  return (
    <Wrapper marginY={marginY} marginX={marginX} pY={pY} pX={pX}>
      { loading ? <button id="disabled-btn" disabled><Spin/>loading....</button> 
      :
      <button id="active-btn" onClick={props.option} type={type}>{props.children}</button>
      }
    </Wrapper>
  );
}


const Wrapper = styled.div`
  #disabled-btn{
    margin: ${props => (props.marginY)}px ${props => (props.marginX)}px;
  }

  #active-btn{
    border: 2px solid white;
    padding: ${props => (props.pY)}px ${props => props.pX}px;
    color: #3c2904;
    font-size: 0.8em !important;
    display: inline-block;
    font-weight: 900;
    background: white;
    margin: ${props => (props.marginY)}px ${props => (props.marginX)}px;
    border-radius: 10px;
  }

  #active-btn:hover{
    background: transparent;
    color: white;
  }

  @media only screen and (max-width: 900px) {
    #active-btn{
      padding: 1px 2px;
      font-size: 0.6em;
    }
  }
`
 
export default BtnGeneral;