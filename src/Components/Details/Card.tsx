import styled from "styled-components";
import React from "react";
import {PX2REM as PX,green} from 'lib/PX2REM'
import Icon from "../Icon";
const Wrapper = styled.div`
  width: ${PX(398)};
  height: ${PX(150)};
  margin: 28px auto;
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
      font-size: 16px;
      margin-left: 20px;
    }
    >.right{
      font-size: 12px;
      margin-right: 16px;
      >span{
        padding: 2px;
        background-color: rgba(246, 246, 246, 100);
        color: rgba(127, 127, 127, 100);
        margin-left: 16px;
      }
    }
  }
  >.bottom{
    background-color: white;
    height: ${PX(75)};
    display: flex;
    align-items: center;
    justify-content: space-between;
    >.left{
      margin-left: ${PX(20)};
      display: flex;
      align-items: center;
      >span{
        display: inline-block;
        text-align: center;
        line-height: ${PX(52)};
        background: ${green};
        width: ${PX(40)};
        height: ${PX(40)};
        border-radius: 50%;
        >.icon{
          display: inline;
          fill:white;
          width: ${PX(24)};
          height: ${PX(24)};
        }
      }
      >div{
        margin-left: 10px;
        display: flex;
        flex-direction: column;
        font-size: 14px;
        >span{
          color: rgba(183, 183, 183, 100);
        }
      }
    }
    >.right{
      margin-right: ${PX(28)};
      color: rgba(224, 187, 106, 100);
      font-size: 14px;
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
            <div className="bottom">
                <div className="left">
                    <span>
                        <Icon name={"shopcar"}/>
                    </span>
                    <div>
                        购物
                        <span>12:45&nbsp;|xx山城衣服</span>
                    </div>
                </div>
                <div className="right">
                    -108.6
                </div>
            </div>
            <div className="bottom">
                <div className="left">
                    <span>
                        <Icon name={"shopcar"}/>
                    </span>
                    <div>
                        购物
                        <span>12:45&nbsp;|xx山城衣服</span>
                    </div>
                </div>
                <div className="right">
                    -108.6
                </div>
            </div>
        </Wrapper>
    )
}

export default Card