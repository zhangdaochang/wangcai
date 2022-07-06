import styled from "styled-components";
import {green, PX2REM as PX} from "../../../lib/PX2REM";

const Wrapper = styled.div`
  height: ${PX(340)};
  background-color: rgba(253, 253, 253, 100);
  padding: 8px;
  >Button{
    float: left;
    width: ${PX(92)};
    height: ${PX(78)};
    border-radius: 4px 4px 4px 4px;
    background-color: rgba(255, 255, 255, 100);
    font-size: 20px;
    font-weight: bold;
    opacity: 1;
    color: black;
    >.icon{
      fill: black;
      width: 24px;
      height: 24px;
    }
    &.ok{
      float: right;
      height: ${PX(230)};
      background-color: ${green};
    }
    &.back{
      display: inline-block;
      float: right;
      text-align: center;
      >.test{
        >div{
          margin: 0 auto;
        }
      }
    }
    &.dian{
      width: ${PX(200)};;
    }
  }
`

export default Wrapper