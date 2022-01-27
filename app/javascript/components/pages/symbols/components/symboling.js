import React, {useState} from 'react';
import styled from 'styled-components';
import { Modal, message } from 'antd';
import { DeleteOutlined, EyeOutlined, EditOutlined } from "@ant-design/icons"
import axios from 'axios';
import 'antd/dist/antd.css';
import SymbolingUpdateForm from './symbolingUpdateForm';


const Symboling = ({ symboling, updateSymboling, reduceSymbolings }) => {
  const [modalVisibility, setModalVisibility] = useState(false)
  
  const handleCancel = () => {
    setModalVisibility(false)
  }

  const deleteSymboling = () => {
    axios.delete(`/symbolings/${symboling.id}`)
    .then(response => {
      if (response.data = "succeeded" ){
        reduceSymbolings(symboling)
      }
    })
  }

  return <Wrapper>
    <div className="d-flex justify-content-between text-white">
      <span>{symboling.name}</span>
      <span className="cursor-pointer" onClick={()=>setModalVisibility(true)}><EditOutlined/></span>
      <span className="cursor-pointer" onClick={ deleteSymboling }><DeleteOutlined style={{color: "red"}}/></span>
    </div>

    <StyledModal
      title="Update Symbol"
      visible={modalVisibility}
      onCancel={handleCancel}
    >
      <SymbolingUpdateForm symboling={symboling} updateSymboling={updateSymboling}
      handleCancel={handleCancel}/>
    </StyledModal>
  </Wrapper>;
}

const Wrapper = styled.div`
  border: 2px solid #1a6c9b;
  padding: 5px;
  margin: 5px;

  :hover{
    background: #1a6c9b;
  }
`

const StyledModal = styled(Modal)`
  .ant-modal-content{
    background: #1d0c0980;
    border: 5px solid orange;
  }

  .ant-modal-header{
    background: orange;
  }

  button:nth-of-type(2){
    display: none;
  }

  .ant-btn{
    background: blue;
    border: 2px solid white;
    padding: 3px 5px;
    color: #3c2904;
    background: white;
    display: inline-block;
    font-weight: 900;
    margin-top: 9px;
  }

  .ant-btn:hover{
    background: transparent;
    color: white;
  }

`
export default Symboling