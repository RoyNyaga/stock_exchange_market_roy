import React, { useState } from 'react'
import styled from 'styled-components'

const DisappearingDiv = (props) => {
  return (
    <Wrapper>
      <div className={props.divClass}>
        {props.children}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .hide{
    display: none;
  }

  .show{
    display: block;
  }
`

export default DisappearingDiv;


