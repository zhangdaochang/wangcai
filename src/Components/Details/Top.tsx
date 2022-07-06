import styled from "styled-components";
import {green, PX2REM as PX} from "lib/PX2REM";
import React from "react";
import Icon from "Components/Icon";
import TypeSelect from "Components/Details/TypeSelect";

const Wrapper = styled.div`
  height: ${PX(180)};
  background: ${green};
  color: white;
  text-align: center;
  >span{
    margin-top: ${PX(16)};
    display: inline-block;
  }
  >.allType{
    font-size: ${PX(16)};;
    width: ${PX(130)};
    height: ${PX(40)};
    background-color: rgba(255, 255, 255, 30%);
    margin-top: ${PX(45)};
    margin-left: ${PX(20)};
    display: flex;
    align-items: center;
    justify-content: center;
    >.test{
      >div{
        margin-left: ${PX(6)};;
        width: ${PX(18)};
        height: ${PX(18)};
      }
    }
  }
  >.details{
    font-size: ${PX(14)};
    color: white;
    display: flex;
    margin:${PX(14)};
    justify-content: space-around;
    align-items: center;
    >.dataSelect{
      display: flex;
      align-items: center;
      >.test{
        >div{
          width: ${PX(16)};
          height: ${PX(16)};
        }
      }
    }
  }
`

const Top:React.FC = ()=>{

    const typeSelect = () => {
        console.log(1)
    }

    return(
        <Wrapper>
            <TypeSelect/>
            <span>记账本</span>
            <div className="allType" onClick={typeSelect}>
                <span>全部类型&nbsp;|</span>
                <Icon name={'allType'} iconFill={'#fff'}/>
            </div>
            <div className="details">
                <div className="dataSelect">
                    <span>2020年6月</span>
                    <Icon name={'bottom'} iconFill={'#fff'}/>
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