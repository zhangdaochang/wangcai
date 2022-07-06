import React from "react";
import styled from "styled-components";
import {PX2REM} from "../lib/PX2REM";


const Wrapper = styled.div`
  opacity: 0;
  height: ${PX2REM(16)}
`

const Space:React.FC = ()=>{
    return(
        <Wrapper/>
    )
}

export default Space