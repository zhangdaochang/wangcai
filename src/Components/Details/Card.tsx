import styled from "styled-components";
import React from "react";
import {PX2REM as PX} from 'lib/PX2REM'
import CardBottom from "./CardBottom";
const Wrapper = styled.div`
  height: ${PX(150)};
  margin: ${PX(28)} auto;
  background-color: white;
  border-radius: 5px;
  
  >.top{
    background-color: rgba(251, 251, 251, 100);
    height: ${PX(75)};
    line-height: ${PX(75)};
    display: flex;
    justify-content: space-between;
    >.left{
      font-weight:bold;
      font-size: ${PX(16)};
      margin-left:${PX(20)};
    }
    >.right{
      font-size: ${PX(12)};
      margin-right: ${PX(16)};
      >span{
        padding: 2px;
        background-color: rgba(246, 246, 246, 100);
        color: rgba(127, 127, 127, 100);
        margin-left: ${PX(16)};
      }
    }
  }

`

const Card:React.FC = ()=>{
    return(
        <Wrapper>
            <div className="top">
                <div className="left">6月27日 昨天</div>
                <div className="right">
                    <span>出</span>0.00
                    <span>入</span>0.00
                </div>
            </div>
            <CardBottom/>
        </Wrapper>
    )
}

export default Card