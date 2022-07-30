import styled from "styled-components";
import {PX2REM as PX,green} from "lib/PX2REM";

const SwitchSection = styled.section`
  height: ${PX(300)};
  text-align: center;
  >h3{
    font-size: 20px;
    margin-top: ${PX(56)};
  }
  >p{
    margin-top: ${PX(50)};
    margin-left: -${PX(100)};
  }
  >div{
    margin-top: ${PX(68)};;
    display: flex;
    justify-content: space-around;
    >Button{
      color:#000;
      opacity: 1.0;
      background-color: #F4F4F4;
      width: ${PX(95)};
      &.active{
        color: ${green};  
      }
    }
  }
`
const TypeList = styled.section`
  padding:${PX(40)};
  >ol{
    display: flex;
    flex-wrap: wrap;
    >li{
      margin:${PX(10)};
    }
  }
`

export {SwitchSection,TypeList}