import React from 'react';
import { Popconfirm, Spin } from 'antd';
import "antd/dist/antd.css"
import styled from "styled-components"

const BtnDelete = (props) => {

  const { type="noSubmit", pY=0, pX=0, marginY=0, marginX=0, object, ...restProps } = props;

  const confirm = (e) => {
    props.option()
  }

  const cancel = (e) => {  
  }

  return (
    <Popconfirm
      title={`Are you sure you about deleting this ${object}`}
      onConfirm={confirm}
      onCancel={cancel}
      okText="Yes"
      cancelText="No"
    > 
      <Link marginY={marginY} marginX={marginX} pY={pY} pX={pX} href="#">{props.children}</Link>
    </Popconfirm>
  )
}

const Link = styled.a`
  color: #a72828;
  padding: ${props => (props.pY)}px ${props => props.pX}px;
  display: inline-block;
  font-weight: 900;
  margin: ${props => (props.marginY)}px ${props => (props.marginX)}px;
  
  :hover{
    background: transparent;
    color: #a72828;
  }

`
 
export default BtnDelete;