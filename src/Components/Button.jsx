import styled from "styled-components";
import {PX2REM as PX} from "lib/PX2REM";

const Wrapper = styled.button`
    border: none;
    width: ${PX(60)};
    height:${PX(35)};
    font-size: 16px;
    border-radius: 6px;
    color: white;
    background-color: transparent;
    opacity: 0.5;
    &.active{
      opacity: 1;
      background-color: rgba(255, 255, 255, 40%);
    }
`

const Button = (props)=>{
    return(
        <Wrapper onClick={props.onclick} className={props.className}>
            {props.value}
        </Wrapper>
    )
}

export default Button