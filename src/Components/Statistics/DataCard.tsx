import styled from "styled-components";
import {green,PX2REM as PX} from "../../lib/PX2REM";
import Icon from "../Icon";
import React from "react";
import Button from "../Button";

const Top = styled.div`
  height: ${PX(276)};
  background-color: ${green};
  >.top{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${PX(104)} ${PX(19)} 0 ${PX(43)};
    >.left{
      color: rgba(255, 255, 255, 100);
      font-size: ${PX(16)}
      >.dataSelect{
        display: flex;
        align-items: center;
        >.test{
          >div{
            width: ${PX(44)};
            height:${PX(44)};
          }
        }
      }
    }
  }
  >.bottom{
    font-size: ${PX(14)};
    color:  rgba(255, 255, 255, 40%);
    margin:40px 0 0 44px;
    >div{
      color:  rgba(255, 255, 255, 100);
      font-size:${PX(35)};
      margin-left: ${PX(8)};
      margin-top: ${PX(8)};
    }
  }
  
`

const DataCard = ()=>{
    return(
        <Top>
            <div className="top">
                <div className="left">
                    <div className="dataSelect">
                        <span>2022年6月</span>
                        <Icon name={'calendar'} iconFill='#fff'/>
                    </div>
                </div>
                <div className="right">
                    <Button className={'active'} value={'支出'}/>
                    <Button value={'入账'}/>
                </div>
            </div>

            <div className="bottom">
                共支出
                <div>1012.65</div>
            </div>
        </Top>
    )
}

export default DataCard