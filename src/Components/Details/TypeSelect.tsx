import styled from "styled-components";
import {PX2REM as PX} from "lib/PX2REM";
import {useContext} from "react";
import pageContext from "Components/Details/PageContext";

const Wrapper = styled.div`
  padding: ${PX(10)};
  height: ${PX(600)};
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
`
const Span = styled.span`
  display: block;
  margin-top: ${PX(10)};;
  height: ${PX(60)};
  background-color: white;
  font-size: ${PX(24)};;
  color: black;
  text-align: left;
  line-height: ${PX(60)};;
  padding-left: ${PX(10)};
`
const TypeSelect = ()=>{

    const {pageData}=useContext(pageContext)
    console.log(pageData);
    return(
        <Wrapper>
            <div>支出</div>
            {

            }
          <Span>tt</Span>
            <div>收入</div>
        </Wrapper>
    )
}
export default TypeSelect