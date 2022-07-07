import styled from "styled-components";
import {PX2REM as PX} from "../../lib/PX2REM";


const Wrapper = styled.span.attrs((p)=>{
    return {'data-id':p['data-id']}
})`
  display: block;
  margin-top: ${PX(2)};;
  height: ${PX(60)};
  background-color: white;
  font-size: ${PX(24)};;
  color: black;
  text-align: left;
  line-height: ${PX(60)};;
  padding-left: ${PX(10)};
`

const Span = (props)=>{
    return(
        <Wrapper data-id={props['data-id']}>{props.children}</Wrapper>
    )
}
export default Span

