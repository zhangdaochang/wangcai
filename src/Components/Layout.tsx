import Nav from "Components/Nav";
import styled from "styled-components";
import {PX2REM as PX} from "lib/PX2REM";

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  height:${PX(414)};;
  flex-direction: column;
  background-color: #f8f8f8;
`
const Main = styled.div`
  flex-grow: 1;
  overflow-y:scroll;
  
`


const Layout =(props:any)=>{
    return(
        <Wrapper>
            <Main>
                {props.children}
            </Main>
            <Nav/>
        </Wrapper>
    )
}

export default Layout