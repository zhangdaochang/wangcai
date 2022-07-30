import styled from "styled-components";
import {PX2REM as PX,green} from "lib/PX2REM";

const Wrapper = styled.div`
  min-height: 100vh;
  background-color: RGBA(200,200,200,40%);
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: end;
  >div{
    height: ${PX(515)};
    background-color: white;
    >.titleName{
      margin-top: ${PX(50)};
      display: flex;
      font-size: 18px;
      align-items: center;
      justify-content: space-around;
    }

    >.iconView{
      >.icon{
        display: flex;
        margin:0 auto;
      }
    }
    
    >.TypeInput{
      font-size: 18px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      >input{
        margin-top:10px;
        display: block;
        background-color: RGB(247,247,247);
        width: ${PX(350)};
        height: ${PX(50)};
        padding-left: 10px;
      }
    }
    >Button{
      opacity:1;
      display: block;
      background-color: RGB(242,242,242);
      color: RGB(0,0,0);
      width:${PX(100)};
      height: ${PX(40)};
      margin: 80px auto 0 auto;
      &.active{
        background-color:${green};
        color: white;
      }
    }
  }
  
`

export default Wrapper