import styled from "styled-components";
import Icon from "Components/Icon";
import {PX2REM as PX,green} from "lib/PX2REM";
import {HTMLAttributes} from "react";
const Wrapper = styled.div`
  height: ${PX(40)};
  border-radius: ${PX(30)};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${green};
  background-color: white;
  padding-right: ${PX(10)};
  opacity: 1;
`
type Props = {
    className?:string
} & HTMLAttributes<any>

const WriteM = (props:Props)=>{
    return(
        <Wrapper onClick={props.onClick} className={props.className}>
            <Icon name={'pen'} iconFill={'rgb(48,112,196)'}/>
            记一笔
        </Wrapper>
    )
}

export default WriteM