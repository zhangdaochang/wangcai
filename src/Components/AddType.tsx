import styled from "styled-components";
import {PX2REM as PX,green} from "../lib/PX2REM";
import Icon from "./Icon";
import Button from "./Button";

const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: ${PX(418)};
  border: 1px solid red;
  >.titleName{
    margin-top: ${PX(50)};
    display: flex;
    font-size: 18px;
    align-items: center;
    justify-content: space-around;
    >.icon{
      width: ${PX(24)};
      height: ${PX(24)};;
    }
  }
  >.TypeInput{
    margin-top: ${PX(96)};
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    >input{
      display: block;
      background-color: RGB(247,247,247);
      width: ${PX(350)};
      height: ${PX(50)};
      padding-left: 10px;
    }
  }
  >Button{
    display: block;
    background-color: RGB(242,242,242);
    color: RGB(188,188,188);
    width:${PX(100)};
    height: ${PX(40)};
    margin: 110px auto 0 auto;
    &.active{
      background-color:${green};
      color: white;
    }
  }
`


const AddType = ()=>{
    return(
        <Wrapper>
            <div className="titleName">
                <span>&nbsp;</span>
                <span>添加分类</span>
                <Icon name={'close'}/>
            </div>
            <div className="TypeInput">
                <input type="text" placeholder="在这里添加分类名称"/>
            </div>
            <Button value={"确定"}/>
        </Wrapper>
    )
}

export default AddType