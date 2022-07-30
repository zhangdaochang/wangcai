import styled from "styled-components";
import {PX2REM} from "lib/PX2REM";

const Wrapper = styled.div`
  background-color:#EDEDED;
  min-height: 100vh;
  >.test{
    flex-direction: row
  }
  >.test{
    fill: black;
    padding: 10px;
    >.div{
      >.icon{
        fill: black;
      }
    }
  }
  >.card{
    width: ${PX2REM(375)};
    height: ${PX2REM(372)};
    background-color: white;
    margin: 0 auto;
    text-align: center;
    >.amount{
      font-size: 24px;
      margin-left: -${PX2REM(15)};
    }
    >.data{
      display: flex;
      width: ${PX2REM(258)};;
      justify-content: space-between;
      margin: 0 auto;
      >label{
        color: #b7b7b7;
        text-align: end;
        width: 4em;
        display: block;
      }
    }
    >.operate{
      display: flex;
      justify-content: space-around;
      margin-top: 50px;
      border-top: 3px solid RGB(245,245,245);
      align-items: center;
      height: 70px;
      >Button{
        width: 100px;
        color:black;
        padding: 10px;
        opacity: 1.0;
        font-size: 20px;
      }
      >Button:nth-child(2){
        color:black;
        color: red;
      }
    }
  }
`

export default Wrapper