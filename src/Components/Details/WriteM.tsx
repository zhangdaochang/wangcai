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
`
type Props = {
    className?:string
} & HTMLAttributes<any>

const WriteM = (props:Props)=>{
    return(
        <Wrapper className={props.className}>
            <Icon name={'pen'} iconFill={'rgba(98, 179, 123, 100)'}/>
            记一笔
        </Wrapper>
    )
}

export default WriteM