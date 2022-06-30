import styled from "styled-components";
import {green, PX2REM as PX} from "../../lib/PX2REM";
import React from "react";
import Icon from "../Icon";

const Wrapper = styled.div`
  height: ${PX(160)};
  background: ${green};
  color: white;
  text-align: center;
  >span{
    margin-top: ${PX(16)};
    display: inline-block;
  }
  >.allType{
    width: ${PX(130)};
    height: ${PX(40)};
    background-color: rgba(255, 255, 255, 30%);
    margin-top: ${PX(45)};
    margin-left: ${PX(20)};
    display: flex;
    align-items: center;
    justify-content: center;
    >.icon{
      margin-left: ${PX(6)};;
      fill: white;
      width: ${PX(18)};
      height: ${PX(18)};
    }
  }
  >.details{
    font-size: 14px;
    color: white;
    display: flex;
    margin:15px;
    justify-content: space-around;
    >.dataSelect{
      display: flex;
      align-items: center;
      >.icon{
        width: ${PX(16)};
        height: ${PX(16)};
        fill: white;
      }
    }
  }
`

const Top:React.FC = ()=>{
    return(
        <Wrapper>
            <span>记账本</span>
            <div className="allType">
                <span>全部类型&nbsp;|</span>
                <Icon name={'allType'}/>
            </div>
            <div className="details">
                <div className="dataSelect">
                    <span>2020年6月</span>
                    <Icon name={'bottom'}/>
                </div>
                <div className="billing">
                    总支出&nbsp;110.2
                </div>
                <div className="recorded">
                    总入账&nbsp;118.2
                </div>
            </div>
        </Wrapper>
    )
}

export default Top