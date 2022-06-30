import styled from "styled-components";
import {green,PX2REM as PX} from "../../lib/PX2REM";
import Icon from "../Icon";
import React from "react";
import Button from "../Button";

const Top = styled.div`
  height: ${PX(256)};
  background-color: ${green};
  >.top{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${PX(104)} ${PX(19)} 0 ${PX(43)};
    >.left{
      color: rgba(255, 255, 255, 100);
      font-size: 16px;
      >.dataSelect{
        display: flex;
        align-items: center;
        >.icon{
          margin-left: 6px;
          fill: white;
          width: 18px;
          height: 18px;
        }
      }
    }
    >.right{
      >button.active{
        opacity: 1;
        background-color: rgba(255, 255, 255, 40%);
      }
    }
  }
  >.bottom{
    font-size: 14px;
    color:  rgba(255, 255, 255, 40%);
    margin:40px 0 0 44px;
    >div{
      color:  rgba(255, 255, 255, 100);
      font-size:35px;
      margin-left: 8px;
      margin-top: 8px;
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
                        <Icon name={'calendar'}/>
                    </div>
                </div>
                <div className="right">
                    <Button className={'active'}>支出</Button>
                    <Button>入账</Button>
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