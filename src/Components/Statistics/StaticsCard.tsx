import styled from "styled-components";
import React, {useEffect, useRef} from "react";
import * as echarts from 'echarts';
import {option} from "../../store";
import {PX2REM} from "../../lib/PX2REM";
const Wrapper = styled.div`
    >div{
      min-height: ${PX2REM(520)};
      padding: 10px;
    }
`

const StaticsCard = ()=>{
    const container = useRef<any>()
    useEffect(()=>{
        // @ts-ignore
        echarts.init(container.current).setOption(option)

    },[])
    return(
        <Wrapper>
           <div ref={container}/>
        </Wrapper>
    )
}

export default StaticsCard