import styled from "styled-components";
import {green, PX2REM as PX} from "../../../lib/PX2REM";

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
      >input{
        background: transparent;
        font-size: ${PX(14)};
        color: white;
        color-scheme: dark;
      }
    }
  }
`
export default Wrapper