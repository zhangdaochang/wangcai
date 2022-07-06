import Icon from "../Icon";
import React from "react";
import {PX2REM as PX} from "../../lib/PX2REM";
import styled from "styled-components";

const Wrapper = styled.div`
    background-color: white;
    height: ${PX(75)};
    display: flex;
    align-items: center;
    justify-content: space-between;
    >.left{
      margin-left: ${PX(20)};
      display: flex;
      align-items: center;
      >div{
        margin-left: ${PX(10)};
        display: flex;
        flex-direction: column;
        font-size: ${PX(14)};
        >span{
          color: rgba(183, 183, 183, 100);
        }
      }
    }
    >.right{
      margin-right: ${PX(28)};
      color: rgba(224, 187, 106, 100);
      font-size: ${PX(14)};
    }
`

const CardBottom = ()=>{
    return(
        <Wrapper>
            <div className="left">
                <Icon iconBac='rgba(98, 179, 123, 100)' name={"shopcar"} iconFill={'#fff'}/>
                <div>
                    购物
                    <span>12:45&nbsp;|xx山城衣服</span>
                </div>
            </div>
            <div className="right">
                -108.6
            </div>
        </Wrapper>
    )
}

export default CardBottom